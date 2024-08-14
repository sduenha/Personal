#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for first number
    int first_number = get_int("First number: ");

    // Prompt user for secound number
    int secound_number = get_int("Secound number: ");

    // Doing the addition of those numbers
    float addition = (float)first_number + (float)secound_number;

    // Doing the division of those numbers
    float division = (float)first_number / (float)secound_number;

    // Printing the resoults
    printf("%f + %f = %.50f\n", first_number, secound_number, addition);
    printf("%f / %f = %.50f\n", first_number, secound_number, division);
}