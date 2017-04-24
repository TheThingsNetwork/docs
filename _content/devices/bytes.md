---
title: Working with Bytes
---

# Working with Bytes
To send data back and forth over The Things Network you'll need to use bytes. This guide will help you encode different types of data in as little bytes possible.

> The unprecedented range of the LoRaWAN technology we build on comes at the cost of low bandwidth and limited airtime (the number times size of packages you send). Fortunately, you don't need a picture of that smart garage bin that needs to emptied. Even a single bit `1` would do!

## What is a byte?
A [byte](https://simple.wikipedia.org/wiki/Byte) is a group of 8 bits. A bit is the most basic unit and can be either 1 or 0. A byte is not just 8 values between 0 and 1, but 256 (2<sup>8</sup>) different combinations (rather [permutations](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)) ranging from `00000000` via e.g. `01010101` to `11111111`. Thus, one byte can represent a [decimal](https://simple.wikipedia.org/wiki/Decimal) number between 0(00) and 255.

> Puzzled? Remember that 3 decimal numbers also don't just stand for 3 values between 0 and 9, but 1000 (10<sup>3</sup>) permutations from 0(00) to 999.

Learn more on [How Stuff Works: How Bits and Bytes Work](http://computer.howstuffworks.com/bytes.htm) and the [Arduino Bit Math Tutorial](http://playground.arduino.cc/Code/BitMath) to learn more about it.

## What is a buffer of bytes?
Think of *buffer* as just another word for an *array*, *list*, whatever resonates with your programming experience. Like a byte is a group of 8 bits, a [buffer](https://en.wikipedia.org/wiki/Data_buffer) is a group of a pre-defined number of bytes. If we have a group of 3 bytes, this could either represent 3 values between 0 and 255, but also one single value between 0 and 16777216 (256<sup>3</sup>).

> See the pattern? The number of choices per position (n) to the power of the number of positions (r) is the number of permutations: n<sup>r</sup>. Learn more on [MathIsFun.com](https://www.mathsisfun.com/combinatorics/combinations-permutations.html).

## What the hex?
Often, you'll see a group of bytes displayed as:
 
```
FF F0 0F 11
```

Wasn't a byte a group of 8 `0`s and `1`s? 🤔 You're totally right, but just like we already saw `11111111` translates to 255 in the good old decimal system, we can also translate it to FF in the [hexadecimal system](https://simple.wikipedia.org/wiki/Hexadecimal_numeral_system) where each position has 16 (0-9 A-F) possible values. The advantage is that it is shorter and explicit about the maximum value (257 is not an option).

The above example [translated](https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html) to the decimal system and padded for readability would be:

```
255 240 015 017
```

To indicate that you mean `11` in hex and not two bits or the number eleven, you prefix it with the `0x` formatter. To tell it you mean binary use `B`.

Code   | Byte value   | Decimal value | Hexadecimal value
-------|--------------|---------------|------------------
`11`   | 00001011     | 11            | B
`0x11` | 00010001     | 17            | 11
`B11`  | 00000011     | 3             | 3

An example for Arduino:

```c
byte data[] = { 0xFF, 0xF0, 0x0F, 0x11 };
// identical: { 255, 240, 15, 17 };
// identical: { B11111111, B11110000, B00001111, B00010001 };
ttn.sendBytes(data, sizeof(data));
```

Yeah, I know... `0x` kind of blows the shorter-to-write advantage of hex. 🙃

## How many bytes can I send?
Technically, you can send 51 bytes. But, the more bytes you'll send, the more airtime the package will cost you and the sooner you'll hit your maximum allotted time. So, don't ask yourself how many you can possibly send but rather ask how few could do the job.

## How to send big numbers?
A better question would be how to send ranges bigger than 255.

### 1. Index
If the possible values you'd need to support don't start at 0 and you know the minimum value, start by indexing on that number.

For example, imagine we'd expect values between 3400 and 3600.

On the device we'd encode this as:

```c
int myVal = 3450;
int myBase = 3400;
byte payload[] = { myVal - myBase };
```

And in the application payload functions do:

```js
var myBase = 3400;
decoded.myVal = bytes[0] + myBase;
```

The other way around, in the application encoder payload function we would have:

```js
var myVal = 3450;
var myBase = 3400;
var bytes = [myVal - myBase];
```

And on the device decode this with:

```c
int myBase = 3400;
int myVal = payload[0] + myBase;
```

As you can see as long as the minimum value is known and the range of our value is 256 or less, we can still use a single byte without breaking a sweat. 😅

### 2. Round
Now what if the range is bigger than 256? The next question would be if you need to know the exact value. If your sensor has a range of 400 and an error margin of 2, you wouldn't lose any meaning by rounding the value. Both 299 and 300 would round to 150, which is fine.

On the device we'd encode this as:

```c
int myVal = 300;
int errorMargin = 2
byte payload[] = { round(myVal / errorMargin) };
```

And in the application payload functions do:

```js
var errorMargin = 2;
decoded.myVal = bytes[0] * errorMargin;
```

You'll get the idea for the other way around.

### 3. Use words

A [word](https://www.arduino.cc/en/Reference/Word) is 2 bytes (except on Due, Zero and similar boards where it is 4 bytes), which already gets you a huge range of 65536 (256<sup>2</sup>). The [int](https://www.arduino.cc/en/Reference/Int) data type is a word and Arduino comes with [`highByte()`](https://www.arduino.cc/en/Reference/HighByte) and [`lowByte()`](https://www.arduino.cc/en/Reference/LowByte) to extract the left and right byte from a word. This makes it really easy to encode and decode.

Encode (Arduino):

```c
int myVal = 20000;
byte payload[2];
payload[0] = highByte(myVal);
payload[1] = lowByte(myVal);
```

Decode (payload functions):

```js
decoded.myVal = (bytes[0] << 8)
               + bytes[1];
```

> Wondering what the `<<` is about? This [Left shifts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift) the 8 bits of the first byte 8 positions to the left. Confused? Think about how we could encode the number 11 as two 1's and decode by shifting the first 1 up one position (making it 10) before adding the other. We'll talk more about bit shifting next.

Encode (payload functions):

```js
var myVal = 20000;
var bytes = [];
bytes[0] = (myVal & 0xFF00) >> 8;
bytes[1] = (myVal & 0x00FF);
```

> Never seen `&` used this way before? This is a [Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND). Used this way the right side of the expression will act as a [mask](https://en.wikipedia.org/wiki/Mask_(computing)) to zero out one byte so we can work with just the other one.

Decode (Arduino):

```c
int myVal = (payload[0] << 8)
           + payload[1];
```

### 4. Shift bits

If the range of expected values is bigger than 65536 we can use the same trick. The only difference is that we have to manually shift bits when we encode on Arduino, just like we did in the payload function.

Let's say we need to encode a [long](https://www.arduino.cc/en/Reference/Long) which uses 4 bytes for a range up to 4294967296.

Encode (Arduino):

```c
long lng = 200000L;
byte payload[4];
payload[0] = (int) ((lng & 0xFF000000) >> 24 );
payload[1] = (int) ((lng & 0x00FF0000) >> 16 );
payload[2] = (int) ((lng & 0x0000FF00) >> 8  );
payload[3] = (int) ((lng & 0X000000FF)       );
```

Decode (payload functions):

```js
decoded.myVal = (bytes[0] << 24)
              + (bytes[1] << 16)
              + (bytes[2] << 8)
              + (bytes[3]);
```

## How to send negative numbers?

To tell the difference between -100 and 100 you will need a [signed](https://en.wikipedia.org/wiki/Signed_number_representations) data type. These set the highest (left-most) bit to `1` to indicate it's a negative number. This does mean that for example in a word only 15 of the 16 bits are available for the actual number, limiting the range from 65536 to 32768.

### Index, round and shift

The data types we used so far are all signed, which means all of the tricks work just as well for negative values. Just be aware of the maximum value.

### Unsigned data types

If you don't expect negative numbers and need a bigger range, explicitly use [`unsigned int`](https://www.arduino.cc/en/Reference/UnsignedInt) or [`unsigned long`](https://www.arduino.cc/en/Reference/UnsignedLong).

## How to send decimals?

So far we have only dealt with rounded numbers. What if you need more precision? The answer very similar to how we indexed or rounded big numbers. Simply multiple and divide the value as you encode and decode it.

Encode (Arduino):

```c
float myVal = 1.22;
byte payload[1];
payload[0] = round(myVal * 100);
```

Decode (payload functions):

```js
decoded.myVal = bytes[0] / 100;
```

Encode (payload functions):

```js
bytes[0] = Math.round(1.22 * 100);
```

Decode (Arduino):

```c
float myVal = payload[0] / 100.00;
```

> Note that it uses `100.00`, not `100`. If both are integers, Arduino/C/C++ will do the math using integers as well, resulting in 1 instead of 1.22.

## How to send multiple numbers?

In a lot of cases you'll want to send multiple values in a single message. Start off by encoding each individual number to a buffer of bytes and then combine them into a single buffer.

Encode (Arduino):

```c
byte payloadA[] = { 0xF0 };
byte payloadB[] = { 0xF0, 0x0F };
byte payloadC[] = { 0xF0, 0x0F, 0xFF };
    
int sizeofPayloadA = sizeof(payloadA);
int sizeofPayloadB = sizeof(payloadB);
int sizeofPayloadC = sizeof(payloadC);
    
byte payload[sizeofPayloadA + sizeofPayloadB + sizeofPayloadC];
    
memcpy(payload, payloadA, sizeofPayloadA);
memcpy(payload + sizeofPayloadA, payloadB, sizeofPayloadB);
memcpy(payload + sizeofPayloadA + sizeofPayloadB, payloadC, sizeofPayloadC);
```

> You might wonder why [`memcpy()`](http://en.cppreference.com/w/c/string/byte/memcpy) accepts `payload + sizeOfPayloadA` as they seem 🍏 and 🍊. Think of it as an instruction to copy to the `payload` buffer, but after moving the point it will copy to, with the length of the payloads we added so far.

Decode (payload functions)

```js
decoded.myValA = bytes.slice(0, 2);
decoded.myValB = bytes.slice(2, 5);

// Decode both byte arrays as we did before
```

Encode (payload function)

```js
// Encode both values as we did before

var bytes = bytesA.concat(bytesB);
```

Decode (Arduino):

```c
var payloadA[2];
var payloadB[3];

memcpy(payloadA, 
```

## How to send text?

The short answer is: **don't**. Text uses a lot of bytes. [Unicode](https://en.wikipedia.org/wiki/Unicode) defines more than 128000 characters, so that would take 3 bytes per character! There are rarely good reasons to use text instead of numbers, apart from maybe transmitting some user input.

You didn't hear it from me, but here's how you'd encode a string:

```c
var myVal = "Hello";
var l = myVal.length();
byte payload[l + 1];
myVal.getBytes(payload, l + 1);
```

Which you would decode with:

```js
decoded.myVal = String.fromCharCode.apply(null, bytes);
```
