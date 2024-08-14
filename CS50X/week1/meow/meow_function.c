#include <C:\CS50X\cs50.h>
#include <stdio.h>

void meow(int times);

void meow(int times)
{
    printf("meow function\n");
}

int main(void)
{
    int times = 4;

    // int i = 0;
    // while (i < n)
    // {
    //     printf("meow\n");
    //     i++;
    // }

    for (int i = 0; i < times; i++)
    {
        meow(times);
    }
}