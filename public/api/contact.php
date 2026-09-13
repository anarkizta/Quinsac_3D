<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$nombre = trim($input['nombre'] ?? '');
$empresa = trim($input['empresa'] ?? '');
$email = trim($input['email'] ?? '');
$telefono = trim($input['telefono'] ?? '');
$servicio = trim($input['servicio'] ?? '');
$mensaje = trim($input['mensaje'] ?? '');

if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Campos obligatorios incompletos']);
    exit;
}

$to = 'contacto@quinsacchile.cl';
$subject = "Nueva Consulta Web Quinsac: $empresa - $nombre";
$body = "Nueva solicitud de cotización recibida desde el sitio 3D:\n\n";
$body .= "Nombre: $nombre\n";
$body .= "Empresa: $empresa\n";
$body .= "Correo: $email\n";
$body .= "Teléfono: $telefono\n";
$body .= "Área Requerida: $servicio\n\n";
$body .= "Mensaje:\n$mensaje\n";

$headers = "From: noreply@quinsacchile.cl\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt mail send if configured on server
@mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Solicitud recibida correctamente. Nos contactaremos a la brevedad.'
]);
