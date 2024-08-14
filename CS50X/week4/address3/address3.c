#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    int n = 0;

    printf("%c\n", *s);
    printf("%c\n", *(s + 1));
    printf("%c\n", *(s + 2));
}