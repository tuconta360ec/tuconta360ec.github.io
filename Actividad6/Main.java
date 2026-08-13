import java.io.*;

public class Main {

    public static void main(String[] args) {

        // ==========================================
        // PARTE 1: MANIPULACIÓN DE ARCHIVOS
        // ==========================================

        String archivoEntrada = "entrada.txt";
        String archivoSalida = "resultado.txt";

        int cantidadPalabras = 0;

        try {

            BufferedReader lector = new BufferedReader(
                    new FileReader(archivoEntrada)
            );

            String linea;

            while ((linea = lector.readLine()) != null) {

                if (!linea.trim().isEmpty()) {
                    String[] palabras = linea.trim().split("\\s+");
                    cantidadPalabras += palabras.length;
                }
            }

            lector.close();

            BufferedWriter escritor = new BufferedWriter(
                    new FileWriter(archivoSalida)
            );

            escritor.write("RESULTADO DEL PROCESAMIENTO");
            escritor.newLine();
            escritor.write("============================");
            escritor.newLine();
            escritor.write("Archivo procesado: " + archivoEntrada);
            escritor.newLine();
            escritor.write("Cantidad total de palabras: " + cantidadPalabras);
            escritor.newLine();

            escritor.close();

            System.out.println("PARTE 1 COMPLETADA");
            System.out.println("Cantidad total de palabras: " + cantidadPalabras);
            System.out.println("Archivo generado: " + archivoSalida);

        } catch (IOException e) {

            System.out.println(
                    "Error al trabajar con los archivos: "
                    + e.getMessage()
            );
        }


        // ==========================================
        // PARTE 2: SERIALIZACIÓN DE OBJETOS
        // ==========================================

        String archivoEstudiante = "estudiante.ser";

        Estudiante estudiante = new Estudiante(
                1001,
                "Diego",
                "Contabilidad y Auditoría",
                39
        );

        // Serializar el objeto
        try {

            ObjectOutputStream salida = new ObjectOutputStream(
                    new FileOutputStream(archivoEstudiante)
            );

            salida.writeObject(estudiante);
            salida.close();

            System.out.println();
            System.out.println("PARTE 2 - SERIALIZACIÓN");
            System.out.println("Objeto Estudiante serializado correctamente.");
            System.out.println("Archivo generado: " + archivoEstudiante);

        } catch (IOException e) {

            System.out.println(
                    "Error al serializar el objeto: "
                    + e.getMessage()
            );
        }


        // Deserializar el objeto
        try {

            ObjectInputStream entrada = new ObjectInputStream(
                    new FileInputStream(archivoEstudiante)
            );

            Estudiante estudianteRecuperado =
                    (Estudiante) entrada.readObject();

            entrada.close();

            System.out.println();
            System.out.println("OBJETO DESERIALIZADO");
            estudianteRecuperado.mostrarDatos();

        } catch (IOException | ClassNotFoundException e) {

            System.out.println(
                    "Error al deserializar el objeto: "
                    + e.getMessage()
            );
        }
    }
}