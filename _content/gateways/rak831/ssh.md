# Generating a SSH public/private key pair

1. Windows: Start GIT Bash
OSX & Linux: start Terminal
2. Use the command below to create the key pair
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
3. When prompted for the file to save the key, press 'Enter' (or 'Return') to accept the default
4. Enter a secure passphase when prompted. Check [github help](https://help.github.com/articles/working-with-ssh-key-passphrases/) for more information if required.

The generated files will be stored in:
Windows: c:\users\<your username>\.ssh
OSX: /Users/<your username>/.ssh
Linux: /home/<your username>/.ssh
