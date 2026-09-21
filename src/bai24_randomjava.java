import java.util.Random;

public class bai24_randomjava {
    public static void main(String[] args) {
        //1.Khoi tao doi tuong random
        Random rd = new Random();
        //2. Chay ngau nhien 1 so nguyen
        //co 1 doi so: mac dinh chay tu 0 -> gia tri < doi so;
        int songuyen1 = rd.nextInt(21);
        System.out.println("so nguyen random tu 0 -> 20: " + songuyen1);
        //2 doi so
        int songuyen2 = rd.nextInt( -50,51); //chay tu -50 den <51
        System.out.println("so nguyen random tu -50 -> 50: " + songuyen2);

        //3. Chay ngau nhien so thuc:
        double x = rd.nextDouble(100);
        System.out.println("random so thuc x: "+ x);
        double y = rd.nextDouble(-100, 100); //chay tu -100 den sat 1 vd: 99, 9999 ko bao gio chay duoc 100;
        System.out.println("random so thuc y: "+ y);

    }
}
