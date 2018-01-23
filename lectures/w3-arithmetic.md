# Arithmetic

## Addition
```java
println( 3 + 4 );
println( 123 + 456 );
```

### Concatenation
```java
String a = "hello";
String b = "world";
println( a + b );
```

## Subtraction
```java
println( 12 - 5 );
println( 1 - 80 );
```

## Multiplication
```java
println( 8 * 8 );
println( 100 * 0.1 );
```

## Division
```java
println( 12 / 4 );
```

```java
println( 1 / 3 );
```
Notice that when you divide two integers, you don't get a float point number. In the case of `1/3`, the result will be `0`. If you want to get float point number, one of the numbers, either numerator or denominator must be a float point number. So, changing `1/3` to `1.0/3` or `1/3.0` will give you the result of `0.3333333`.

## The order of operations
```java
println( 1 + 2 * 3 );
println( (1 + 2) * 3 );
```

## Modulus
When you use modulus operator `%`, It will return you the remainder from the division.
```java
println( 12 % 4 ); // 0
println( 12 % 5 ); // 2
```

## Ceil
`ceil()` rounds a number upwards to the nearest integer.
```java
float a = 0.5;
int b = ceil(a);
println(b);
```

## floor
```java
float a = 0.9;
int f = floor(a);
println(f);
```

## Round
```java
float a = 0.49;
float b = 0.5;
println( round(a) ); // 0
println( round(b) ); // 1
```

## Min 
```java
int a = 12;
int b = 24;
println( min(a, b) );
```

## Max
```java
int a = -8;
int b = -20;
println( max(a, b) );
```

<!--
note to myself: 
  create examples to visualize each function. 
  as in shaping function in glsl.
-->
