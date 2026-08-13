import java.util.LinkedList;
import java.util.Queue;

public class Cola {

    private Queue<String> elementos;

    public Cola() {
        elementos = new LinkedList<>();
    }

    // Insertar un elemento en la cola
    public void insertar(String elemento) {
        elementos.offer(elemento);
    }

    // Eliminar el primer elemento
    public void eliminar() {
        if (!elementos.isEmpty()) {
            String eliminado = elementos.poll();
            System.out.println("Elemento eliminado de la cola: " + eliminado);
        } else {
            System.out.println("La cola está vacía.");
        }
    }

    // Recorrer y mostrar la cola
    public void recorrer() {
        System.out.println("\n--- RECORRIDO DE LA COLA (FIFO) ---");

        if (elementos.isEmpty()) {
            System.out.println("La cola está vacía.");
        } else {
            for (String elemento : elementos) {
                System.out.println("- " + elemento);
            }
        }
    }
}