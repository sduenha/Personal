// Modifies the volume of an audio file

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    // Open files and determine scaling factor
    FILE *ler = fopen("ler.txt", "r");
    if (ler == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    FILE *escrever = fopen("escrever.txt", "w");
    if (escrever == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    fseek(ler, 0, SEEK_END);
    int position = ftell(ler);
    printf("%i", position);
    fseek(ler, 0, SEEK_SET);

    char buffer;
    int count = 3;

    for (int i = 0; i < position; i++)
    {
        fread(&buffer, sizeof(char), 1, ler);
        for (int i = 0; i < count; i++)
        {
            fwrite(&buffer, sizeof(char), 1, escrever);
        }
    }

    // Close files
    fclose(ler);
    fclose(escrever);
}
