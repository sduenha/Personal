#include <C:\CS50X\cs50.h>
#include <stdio.h>

void spaces(int points, int length, int choise);
void piramide(int points, int length);

int main(void)
{
    int length = 1;
    int points = 1;

    int choise;
    do
    {
        choise = get_int("What is the heigth? ");
    } while (choise < 1 || choise > 8);

    for (int i = 0; i < choise; i++)
    {
        spaces(points, length, choise);
        piramide(points, length);
        printf("\n");
        points++;
    }
}

void piramide(int points, int length)
{
    length = 0;
    while (length < points)
    {
        printf("#");
        length++;
    }
}

void spaces(int points, int length, int choise)
{
    length = choise;
    while (length > points)
    {
        printf(" ");
        length--;
    }
}