#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <math.h>

bool validation(int argc, int key, int length);
string codification(string plaintext, int key);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    int key = atoi(argv[1]);
    int length = strlen(argv[1]);
    int aswer = validation(argc, key, length);
    if (aswer == 1)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    string plaintext = get_string("Plaintext:  ");
    string ciphertext = codification(plaintext, key);

    printf("ciphertext: %s\n", ciphertext);
    return 0;
}

bool validation(int argc, int key, int length)
{
    int aswer = 0;
    int digits_key[length];
    int count = 0;

    while (key != 0)
    {
        digits_key[count] = key % 10;
        key /= 10;
        count++;
    }

    for (int i = 0; i < length; i++)
    {

        if (digits_key[i] >= 0 && digits_key[i] <= 9)
        {
            aswer = 0;
        }
        else
        {
            aswer = 1;
            return aswer;
        }
    }

    return aswer;
}

string codification(string plaintext, int key)
{
    int text_length = strlen(plaintext);
    int letters;

    for (int i = 0; i < text_length; i++)
    {
        letters = (int)plaintext[i];

        if (letters > 64 && letters <= 90 || letters > 96 && letters <= 122)
        {
            int count = 0;
            if (isupper(plaintext[i]))
            {
                do
                {
                    count++;
                    if (letters + 1 > 90)
                    {
                        letters = 65;
                    }
                    else
                    {
                        letters += 1;
                    }
                    plaintext[i] = letters;
                } while (count < key);
            }
            else
            {
                do
                {
                    count++;
                    if (letters + 1 > 122)
                    {
                        letters = 97;
                    }
                    else
                    {
                        letters += 1;
                    }
                    plaintext[i] = letters;
                } while (count < key);
            }
        }
    }

    return plaintext;
}
