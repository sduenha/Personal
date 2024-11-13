import cv2
import face_recognition

# Inicializa a captura de vídeo
video_capture = cv2.VideoCapture(0)

while True:
    # Captura o frame do vídeo
    ret, frame = video_capture.read()
    
    # Converte o frame para RGB (o face_recognition usa RGB)
    rgb_frame = frame[:, :, ::-1]
    
    # Encontra os rostos no frame
    face_locations = face_recognition.face_locations(rgb_frame)
    
    # Desenha um retângulo ao redor de cada rosto detectado
    for (top, right, bottom, left) in face_locations:
        # Desenha o retângulo
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
    
    # Mostra o frame com os rostos detectados
    cv2.imshow('Video', frame)
    
    # Pressiona 'q' para sair
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Libera a captura e fecha a janela
video_capture.release()
cv2.destroyAllWindows()
