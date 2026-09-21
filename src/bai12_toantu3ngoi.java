import java.util.Scanner;

public class bai12_toantu3ngoi {
    public static void main(String[] args) {
    //Cong thuc:  Bien = bt1 ? bt2 : (bt1.1 ? bt2.1 : bt3)

        Scanner sc = new Scanner(System.in);
//        System.out.println("Nhap vao 1 so nguyen: ");
//        int n = sc.nextInt();
//        String kq = (n%2 == 0) ? "so chan" : "so le";
//        System.out.println("So "+ n + " la " + kq);

        //Bai tap: nhap diem trung binh
        System.out.println("Nhap dtb: ");
        double dtb = sc.nextDouble();
        String kq = (dtb >= 8) ? "Gioi" :
                ((dtb < 8 && dtb >= 6.5) ? "Kha":
                        (dtb < 6.5 && dtb >= 5) ? "Trung binh" : "Yeu");
        System.out.println(kq);


    }
}
