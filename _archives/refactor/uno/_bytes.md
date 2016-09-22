# Working with bytes
To send data back and forth over The Things Network you'll need to use bytes.

## What is a byte?
A [byte](https://simple.wikipedia.org/wiki/Byte) is a group of 8 bits. A bit is the most basic unit and can be either `1` or `0`. A byte is not just 8 values between 0 and 1, but 256 (`2^8`) different combinations ranging from `00000000` via e.g. `01010101` to `11111111`. Thus, one byte can represent a [decimal](https://simple.wikipedia.org/wiki/Decimal) number between 0 and 255.

If bits & bytes are new to you, read [How Stuff Works: How Bits and Bytes Work](http://computer.howstuffworks.com/bytes.htm) and the [Arduino Bit Math Tutorial](http://playground.arduino.cc/Code/BitMath).

## What is a buffer of bytes?
Think of *buffer* as just another word for an *array*, *list*, whatever resonates with your programming experience. Like a byte is a group of 8 bits, a [buffer](https://en.wikipedia.org/wiki/Data_buffer) is a group of a pre-defined number of bytes. If we have a group of 3 bytes, this could either represent 3 values between 0 and 255, but also one single value between 0 and 16.777.216 (`256^3`) for all combined unique combinations.

## What the hex?
Often, you'll see a group of bytes displayed as:
 
```
FF F0 0F 11
```

Wasn't a byte a group of 8 `0`s and `1`s? 🤔 You're totally right, but just like we already saw `11111111` translates to `255` in the good old decimal system, we can also translate it to `FF` in the [hexadecimal system](https://simple.wikipedia.org/wiki/Hexadecimal_numeral_system) where each position has 16 (0-9 A-F) possible values. The advantage is simply that it is shorter.

The above example [translated](https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html) to the decimal system and padded for readability would be:

```
255 240 015 017
```

In code, to tell the computer you mean `11` in hex and not two bits or the number eleven, you prefix it with the `0x` formatter. To tell it you mean binary use `B`.

Code   | Byte value   | Decimal value | Hexadecimal value
-------|--------------|---------------|------------------
`11`   | 00001011     | 11            | B
`0x11` | 00010001     | 17            | 11
`B11`  | 00000011     | 3             | 3

An example for Arduino:

```c
byte data[] = { 0xFF, 0xF0, 0x0F, 0x11 };
// identical: { 255, 240, 15, 17 };
// identical: { B11111111, B11110000, B1111, B10001 };
ttn.sendBytes(data, sizeof(data));
```

## How many bytes can I send?
Technically, you can send 64 bytes. But, the more bytes you'll send, the more airtime it takes and the sooner you'll hit your maximum allotted time. So, don't ask yourself how many you can possibly send but rather ask how few could do the job.

## How to send numbers bigger than 255?
A better question would be how to send ranges bigger than 255.

### 1. Index
If the possible values you'd need to support don't start at 0 and you know the minimum value, start by indexing on that.

For example, imagine we'd expect values between 3400 and 3600.

On the device we'd encode this as:

```c
int myVal = 3450;
int myBase = 3400;
byte data[] = { myVal - myBase };
```

And in the application decoder payload function do:

```js
var myBase = 3400;
decodedObj.myVal = bytes[0] + myBase;
```

The other way around, in the application encoder payload function we would have:

```js
var myVal = 3450;
var myBase = 3400;
var bytes = [myVal - myBase];
```

And on the device decode with:

```c
int myBase = 3400;
int myVal = ttn.downlink[0] + myBase;
```

As you can see as long as the minimum value is known and the range of our value is 256 or less, we can still use a single byte without breaking a sweat. 😅

### 2. Round

### 3. Split into multiple bytes
If the range of expected values is bigger than 256, we'll need to use multiple bytes to encode it.

This is actually not very different than the need to use multiple bits for ranges bigger than 2 (`0` and `1`). With each byte supporting a range of 256, two bytes will already get you 65.536 (`256^2`).

Let's say we need to be able to encode all [True Color](https://en.wikipedia.org/wiki/Color_depth#True_color_.2824-bit.29) variations. Also known as 24-bit color, it will take 3 (`24/8`) bytes for all 16.777.216 possibilities.

Let's encode the 4132611th color variation. How do we get this into an array of 3 bytes?

```c
int myColor = 4132611;
byte data[3];
// now what?!
```

Let's [see](https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html) what 4.132.611 looks like in bits, group per byte:

```
00111111 00001111 00000011
```

So what we are going is cut these into 3 bytes

```
63 15 3
```

## How to send negative numbers?
If you know the minimum possible value, simply index the value as we did above. For example, if you expect values between -100 and 100, the above examples still work if you use `-100` for `myBase`.

### Signed bytes
**TODO**

## How to send decimals?

## How to send multiple numbers?
**TODO**

## How to send text?
**TODO**

In short: don't.
