import java.util.ArrayList;

public class Lista {

    private ArrayList<String> elementos;

    public Lista() {
        elementos = new ArrayList<>();
    }

    public void insertar(String elemento) {
        elementos.add(elemento);
    }

    public void eliminar(String elemento) {
        if (elementos.remove(elemento)) {
            System.out.println("Elemento eliminado: " + elemento);
        } else {
            System.out.println("El elemento no existe en la lista: " + elemento);
        }
    }

    public void recorrer() {
        System.out.println("\n--- RECORRIDO DE LA LISTA ---");

        if (elementos.isEmpty()) {
            System.out.println("La lista está vacía.");
        } else {
            for (String elemento : elementos) {
                System.out.println("- " + elemento);
            }
        }
    }

    public int tamaño() {
        return elementos.size();
    }
}