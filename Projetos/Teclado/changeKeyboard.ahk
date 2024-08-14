#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; Habilita debug de teclas digitadas
#InstallKeybdHook

; ABNT2 - Remapeia IJKL arrows com CapsLock
;
; Segure o capsLock do teclado e as seguinte teclas:
; I - Cima
; J - Esquerda
; K - Baixo
; L - Direita
;
CapsLock & i:: Send {Blind}{CapsLock up}{Up}
CapsLock & j:: Send {Blind}{CapsLock up}{Left}
CapsLock & k:: Send {Blind}{CapsLock up}{Down}
CapsLock & l:: Send {Blind}{CapsLock up}{Right}
