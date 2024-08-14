#include <C:\CS50X\cs50.h>
#include <stdio.h>

float discount(float regular_price, int percent_off);

int main(void)
{
    float regular_price = get_float("What's the regular price of this product? ");
    int percent_off = get_int("What is the discount on this product? ");
    float sale_price = discount(regular_price, percent_off);
    printf("Now this product cousts you: U$%.2f", sale_price);
}

float discount(float regular_price, int percent_off)
{
    return regular_price * (100 - percent_off) / 100;
}