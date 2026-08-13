import java.io.Serializable;

public class Estudiante implements Serializable {

    private static final long serialVersionUID = 1L;

    private int id;
    private String nombre;
    private String carrera;
    private int edad;

    public Estudiante(int id, String nombre, String carrera, int edad) {
        this.id = id;
        this.nombre = nombre;
        this.carrera = carrera;
        this.edad = edad;
    }

    public void mostrarDatos() {
        System.out.println("ID: " + id);
        System.out.println("Nombre: " + nombre);
        System.out.println("Carrera: " + carrera);
        System.out.println("Edad: " + edad);
    }
}