---
title: Reverse SSH
weight: 600
---

SSH is a secure connection between a client and server over which commands can be executed on the server. As long as the two devices can see each other on the internet the SSH connection can also be made from the server to the client. This is however often blocked by firewalls and NATs.

SSH also has the ability of forwarding ports over this secure connection, creating in essense a simple VPN. This can be used to dial another SSH connection from the server to the client via an existing SSH connection from the client to the server. This is called reverse SSH.

http://www.pc-freak.net/blog/reverse-ssh-tunnel/

## Setup your SSH server

You will need a server or other computer running Linux or any other operating system which can be accessed via SSH. This server needs to be accesible via a public IP address on the internet. You should create a hostname to point to this server and use the hostname to ssh to the server. This will allow you to connect to the server even when the IP address changes.

For the next step you will need to know the hostname of this server. As an example let's say the hostname is `sshgateway.example.com`. We will also need to know the username you use to log into this server. We'll use `serveruser` as example.

## Setup the gateway to dial SSH on startup

Log into your gateway using either SSH or the Wirgrid.

Run the following commands:
```
[root@Wirnet_080E0xxx ~]# cd ~
[root@Wirnet_080E0xxx ~]# mkdir .ssh
[root@Wirnet_080E0xxx ~]# dropbearkey -t rsa -f ~/.ssh/id_rsa
```

After the last command you will see an output like this:
```
Generating key, this may take a while...
Public key portion is:
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbsZlO+eEHPicyOvY5hQd9p0MclysfIC1hZ3CEyCfgQNP3RqTRtQePIWCcAGFheSjTOzJvcfhHcU9DuGALehkA0h+v4FgfPmDuq4p0JuyK12LWp/gca1eYfqNs9mMQdwunXlrEvgnS+y+ldZoBaDQUOM56PNuVnlnIsk9rNbC35DMKbtlCuxjPIVXcY9Dozen2t3YbaqG8g/Rx0PH0+EwaR0nw5i64lQJlDyCM4tVWgkfPkTQ8i1uf7Oww69zHibUPMfkWupz3Qweqc4tpBEDZ7BoZhnc5SpVZNmYLYvHOEdaoLT/GWjx0CP9MBVk9V1FIw0AjbJ2Iu0QMbhiH9mAb root@Wirnet_080E0xxx
Fingerprint: md5 25:51:e4:04:06:3b:2e:b8:be:eb:df:26:9d:d2:58:8b
```

Copy the entire line starting with `ssh-rsa` and ending with `root@Wirnet_080E0xxx`. This is called the public key. Save this to a file as a backup. We will need this later. You might also want to make a backup of the `~/.ssh/id_rsa` file. You can use SCP to copy the file from the gateway: `scp root@kerlink-ip-address:/root/.ssh/id_rsa .`

On the gateway create a file called `startSshTunnel.sh` by running:

`[root@Wirnet_080E0xxx ~]# vi startReverseSshTunnel.sh`

Press `i` and then paste the following code.

```
#!/bin/sh

# Put "/root/startReverseSshTunnel.sh &" at bottom of /etc/rc.d/rc.local

while true
do
  # loop infinitely
  /sbin/start-stop-daemon -x \
  ssh -p /var/run/rev-ssh-1.pid -m -S \
  -- -i /root/.ssh/id_rsa -K 10 -y \
  -o UseSyslog=yes -o ExitOnForwardFailure=yes -N \
  -R sshgateway.example.com:20022:localhost:22 \
  serveruser@sshgateway.example.com

  sleep 1
done
```

In two instances replace `sshgateway.example.com` by your hostname and replace in one instance `serveruser` by your server's username.

Press the escape key on your keyboard, then type `:w`, press enter, then type `:q` and enter again. The file should be saved now.

Run the following command to allow this file to execute as a program.

`[root@Wirnet_080E0xxx ~]# chmod +x startSshTunnel.sh`

Now add this file to the end of /etc/rcd/rc.local by doing the following.

`[root@Wirnet_080E0xxx ~]# vi /etc/rc.d/rc.local`

Press `i` to start typing. Go down to the end and paste `/root/startReverseSshTunnel.sh &`. Press escape, then `:w`, enter, `:q`, enter.

`/etc/rc.d/rc.local` should look like this:
```
#!/bin/sh
#
# This script will be executed *after* all the other init scripts.
# You can put your own initialization stuff in here

# reset rescue counter
fw_setenv bootfail 0

# Stop watchdog if debug or prod mode
RUNLEVEL=`runlevel | awk '{print $NF}'`
case ${RUNLEVEL} in
        2|4)
           wirma2hw wd down
           ;;
        *)
           ;;
esac

/root/startReverseSshTunnel.sh &
```

## Disable the Kerlink firewall

By default the firewall on the Kerlink blocks outgoing SSH connections. You can either add a rule to allow this, or you can disable the firewall. Edit `/etc/sysconfig/network` by using `vi` like before. Change `FIREWALL=yes` to `FIREWALL=no`.

Restart the network to apply the firewall change:

`[root@Wirnet_080E0188 ~]# /etc/init.d/network restart`

## Copy your public key to the server

Copy-paste the public key you saved earlier and add it to the `~/.ssh/authorized_keys` on the server.

Execute the following on the gateway
```
[root@Wirnet_080E0xxx ~]# ssh -i /root/.ssh/id_rsa serveruser@sshgateway.example.com
```

If you do not get a password prompt or an error, and you are logged into the server, your key exchange has been done correctly.


## Reverse SSH into the gateway from your server

Restart the gateway and wait two minutes. Log into your server and try to SSH into the gateway via the reverse SSH tunnel:

`ssh root@localhost -p 20022`

If everything has been done correctly you should be asked for the password and then logged into the gateway.
