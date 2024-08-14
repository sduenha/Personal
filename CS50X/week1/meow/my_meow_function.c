#include <C:\CS50X\cs50.h>
#include <stdio.h>

void meow(int times_user);

int main(void)
{
    int times_user = get_int("How many times the cat meow? ");
    meow(times_user);
}

void meow(int times_user)
{
    for (int i = 0; i < times_user; i++)
    {
        printf("My meow function\n");
    }
}
