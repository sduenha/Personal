#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

int *checking_parameters(int length, string text, int *array);
int checking_result(int datas[]);

int main(void)
{
    string text = get_string("Text: ");
    int length = strlen(text);
    int array[3];
    int *datas = checking_parameters(length, text, array);
    int grade = checking_result(datas);

    if (grade < 1)
    {
        printf("Before grade 1");
    }
    else if (grade >= 16)
    {
        printf("Grade 16+");
    }
    else
    {
        printf("Grade %i", grade);
    }
}

int *checking_parameters(int length, string text, int *array)
{
    int letters;
    for (int i = 0; i < length; i++)
    {
        if (text[i] >= 'A' && text[i] <= 'Z' || text[i] >= 'a' && text[i] <= 'z')
        {
            letters++;
        }
    }

    int sentences = 0;
    for (int i = 0; i < length; i++)
    {
        if (text[i] == 46 || text[i] == 33 || text[i] == 63)
        {
            sentences++;
        }
    }

    int words;
    if (length > 0)
    {
        words = 1;
    }
    for (int i = 0; i < length; i++)
    {
        if (text[i] == 32)
        {
            words++;
        }
    }

    array[0] = letters;
    array[1] = sentences;
    array[2] = words;
    return array;
}

int checking_result(int datas[])
{
    double letters_per_100_words = (float)datas[0] / (float)datas[2] * 100;
    double sentences_per_100_words = (float)datas[1] / (float)datas[2] * 100.0;
    int result = round(0.0588 * letters_per_100_words - 0.296 * sentences_per_100_words - 15.8);

    return result;
}