import cv2
import face_recognition
import os

# Pasta onde estão as imagens conhecidas
known_faces_dir = 'pessoas_conhecidas/'

# Carrega as faces conhecidas
known_face_encodings = []
known_face_names = []

for filename in os.listdir(known_faces_dir):
    # Carrega a imagem e cria a codificação
    image = face_recognition.load_image_file(f"{known_faces_dir}/{filename}")
    encoding = face_recognition.face_encodings(image)[0]
    known_face_encodings.append(encoding)
    
    # Adiciona o nome (removendo a extensão)
    known_face_names.append(filename.split('.')[0])

# Inicializa a captura de vídeo
video_capture = cv2.VideoCapture(0)

while True:
    # Captura o frame do vídeo
    ret, frame = video_capture.read()
    rgb_frame = frame[:, :, ::-1]  # Converte o frame para RGB

    # Localiza os rostos e codificações no frame
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
    
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        # Compara com as faces conhecidas
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        name = "Desconhecido"
        
        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]

        # Desenha o retângulo e o nome
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        cv2.putText(frame, name, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)
    
    # Mostra o vídeo com as identificações
    cv2.imshow('Video', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Libera a câmera e fecha a janela
video_capture.release()
cv2.destroyAllWindows()
