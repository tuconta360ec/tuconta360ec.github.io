import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        System.out.println("========================================");
        System.out.println("       ACTIVIDAD 7 - JAVA");
        System.out.println("  EXCEPCIONES Y ESTRUCTURAS DE DATOS");
        System.out.println("========================================");

        // ========================================
        // PARTE 1: LECTURA DE ARCHIVO
        // ========================================

        System.out.println("\n1. LECTURA DEL ARCHIVO");
        System.out.println("----------------------------------------");

        String nombreArchivo = "datos.txt";

        try {
            BufferedReader lector = new BufferedReader(
                    new FileReader(nombreArchivo));

            String linea;
            int numeroLineas = 0;
            int numeroPalabras = 0;

            while ((linea = lector.readLine()) != null) {
                System.out.println(linea);

                numeroLineas++;

                String texto = linea.trim();

                if (!texto.isEmpty()) {
                    String[] palabras = texto.split("\\s+");
                    numeroPalabras += palabras.length;
                }
            }

            lector.close();

            System.out.println("\nArchivo leído correctamente.");
            System.out.println("Cantidad de líneas: " + numeroLineas);
            System.out.println("Cantidad de palabras: " + numeroPalabras);

        } catch (IOException e) {
            System.out.println("Error al leer el archivo.");
            System.out.println("Detalle: " + e.getMessage());
        }

        // ========================================
        // PARTE 2: LISTA
        // ========================================

        System.out.println("\n2. ESTRUCTURA LISTA");
        System.out.println("----------------------------------------");

        Lista lista = new Lista();

        lista.insertar("Java");
        lista.insertar("Python");
        lista.insertar("C++");
        lista.insertar("JavaScript");

        System.out.println("Elementos insertados en la lista:");
        lista.recorrer();

        lista.eliminar("C++");

        System.out.println("\nLista después de eliminar C++:");
        lista.recorrer();

        System.out.println("Cantidad de elementos: " + lista.tamaño());

        // ========================================
        // PARTE 3: PILA - LIFO
        // ========================================

        System.out.println("\n3. ESTRUCTURA PILA - LIFO");
        System.out.println("----------------------------------------");

        Pila pila = new Pila();

        pila.insertar("Elemento 1");
        pila.insertar("Elemento 2");
        pila.insertar("Elemento 3");

        System.out.println("Elementos de la pila:");
        pila.recorrer();

        System.out.println("\nSe elimina el último elemento ingresado:");
        pila.eliminar();

        System.out.println("\nPila después de eliminar:");
        pila.recorrer();

        // ========================================
        // PARTE 4: COLA - FIFO
        // ========================================

        System.out.println("\n4. ESTRUCTURA COLA - FIFO");
        System.out.println("----------------------------------------");

        Cola cola = new Cola();

        cola.insertar("Cliente 1");
        cola.insertar("Cliente 2");
        cola.insertar("Cliente 3");

        System.out.println("Elementos de la cola:");
        cola.recorrer();

        System.out.println("\nSe elimina el primer elemento ingresado:");
        cola.eliminar();

        System.out.println("\nCola después de eliminar:");
        cola.recorrer();

        // ========================================
        // FINAL
        // ========================================

        System.out.println("\n========================================");
        System.out.println("    PROGRAMA FINALIZADO " );
        System.out.println("========================================");
    }
}