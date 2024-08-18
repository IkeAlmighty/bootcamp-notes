# UTF-8

UTF-8 is used as the primary character set for the web. It supports most languages in existence, which is why the total size of the full UTF table is 1,112,064. 

UTF-8 encodings are represented by ["four one byte (8-bit) code units"](https://en.wikipedia.org/wiki/UTF-8). So each UTF-8 encoding is a total of 32 bits long.

So, when you see a character in a web browser, you now know that the computer reads it as an encoding on thr UTF-8 encoding table, and the browser simply uses this table to lookup the character and render it appropriately.

## Bonus: 'lang' attribute of the HTML tag
This is tangential to UTF-8, but when a browser interprets the 'lang' attribute on an html tag, this helps the browser filter for certain languages on web searches. 

An html document will still be rendered just fine regardless of the lang attribute's value, but signifying the natural language is super helpful for making your website more accessible to other programs!
