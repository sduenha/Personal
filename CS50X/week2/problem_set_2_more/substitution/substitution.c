#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

bool validation(int argc, string key, int key_length);
string codification(string plaintext, string key);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    string key = argv[1];
    int key_length = strlen(key);
    bool validation_data = validation(argc, key, key_length);
    if (validation_data == 1)
    {
        return 1;
    }

    string plaintext = get_string("plaintext:  ");
    string ciphertext = codification(plaintext, key);

    printf("ciphertext: %s\n", ciphertext);
}

bool validation(int argc, string key, int key_length)
{
    if (key_length != 26)
    {
        printf("Key must contain 26 characters.\n");
        return 1;
    }
    for (int i = 0; i < key_length; i++)
    {
        int character = (int)key[i];

        if (character < 65 || character > 90 && character < 97 || character > 122)
        {
            printf("Key must only contain alphabetic characters.\n");
            return 1;
        }
    }
    return 0;
}

string codification(string plaintext, string key)
{
    int length = strlen(plaintext);
    int amount;
    for (int i = 0; i < length; i++)
    {
        int letter = (int)plaintext[i];

        if (letter >= 65 && letter <= 90)
        {
            amount = letter - 65;
            plaintext[i] = toupper(key[amount]);
        }
        else if (letter >= 97 && letter <= 122)
        {
            amount = letter - 97;
            plaintext[i] = tolower(key[amount]);
        }
    }
    return plaintext;
}