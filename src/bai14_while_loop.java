import java.util.Scanner;

public class bai14_while_loop {
    public static void main(String[] args) {
//        int x = 0;
//        while (x <= 5){
//            System.out.println("x = " + x);
//            x++;
//        }

        //Bai tap: nhap so nguyen tu 1-99, nhap sai nhap lai
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap vao so nguyen tu 1-99: ");
        int n = sc.nextInt();
        while (n<1 || n > 99){
            System.out.println("n chi duoc nhap tu 1-99 thoi thim");
            n = sc.nextInt();
        }
        System.out.println("Ban da nhap xong n = " + n);
    }
}
