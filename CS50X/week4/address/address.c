// pointers-> variable that stores the address(location) of some value -> this variable has to stats with an *

#include <stdio.h>
#include <C:\CS50X\cs50.h>

int main(void)
{
    int n = 50;
    int *p = &n;
    printf("%p\n", p);
    printf("%i\n", *p);
}