import java.util.Stack;

public class Pila {

    private Stack<String> elementos;

    public Pila() {
        elementos = new Stack<>();
    }

    // Insertar un elemento en la pila
    public void insertar(String elemento) {
        elementos.push(elemento);
    }

    // Eliminar el elemento superior
    public void eliminar() {
        if (!elementos.isEmpty()) {
            String eliminado = elementos.pop();
            System.out.println("Elemento eliminado de la pila: " + eliminado);
        } else {
            System.out.println("La pila está vacía.");
        }
    }

    // Recorrer y mostrar la pila
    public void recorrer() {
        System.out.println("\n--- RECORRIDO DE LA PILA (LIFO) ---");

        if (elementos.isEmpty()) {
            System.out.println("La pila está vacía.");
        } else {
            for (String elemento : elementos) {
                System.out.println("- " + elemento);
            }
        }
    }
}