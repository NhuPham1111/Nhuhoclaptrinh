import java.util.Scanner;

public class bai10_scannerNhaplieu {
    public static void main(String[] args) {
        //khoi tao scanner
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap mat khau: ");

        String mk1 = sc.nextLine();
        System.out.println("mk cap 1 la:"+ mk1);

        //Nhap so nguyen
        System.out.println("Nhap so nguyen: ");
        int a = sc. nextInt();
        System.out.println("a="+ a);

        //khai bao scanner cho tung doi tuong de tranh loi
        System.out.println("Nhap ten: ");
        String ten = new Scanner(System.in).nextLine();
        System.out.println("Nhap tuoi:");
        int tuoi = new Scanner(System.in).nextInt();
        System.out.println("Nhap chieu cao:");
        float chieucao = new Scanner(System.in).nextFloat();

    }
}
//1.khoi tao scanner  Scanner sc = new Scanner(System.in);
//2. Tuy kdl nhap ma ta dung
/*
* Chuoi: sc.nextLine();
* int: sc.nextInt();
* String: sc.nextString();
* float: sc.nextFloat();
* */