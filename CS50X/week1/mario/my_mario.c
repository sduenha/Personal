#include <C:\CS50X\cs50.h>
#include <stdio.h>

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
        piramide(points, length);
        printf("\n");
        points++;
    }
}

void piramide(int points, int length)
{
    length = 0;
    do
    {
        printf("#");
        length++;
    } while (length < points);
}