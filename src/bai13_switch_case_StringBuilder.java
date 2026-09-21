import java.util.Scanner;

public class bai13_switch_case_StringBuilder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        System.out.println("Nhap vao 1 so: ");
//        int a = sc.nextInt();
//        int div = a%2;
//        switch (div){
//            case 0:
//                System.out.println( a + " la so chan");
//                break;
//            default:
//                System.out.println( a + " la so le");
//                break;
//        }

        // Bai tap: viet chuong trinh khung tim kiem cho nguoi dung nhap vao lua chon
        /* Yeu cau:
        * Tim theo ten
        * Tim theo tac gia
        * Tim theo nha xuat ban
        * Tim theo tieu de
        * Thoat neu phim bam ko hop le
        * */

        System.out.println("Bam vao de de chon");
        System.out.println("Bam 1: tim theo ten");
        System.out.println("Bam 2: tim theo tac gia");
        System.out.println("Bam 3: tim theo NXB");
        System.out.println("Bam 4: tim theo tieu de");
        int so = sc.nextInt();
        switch (so){
            case 1:
                System.out.println("Tim theo ten");
                break;
            case 2:
                System.out.println("Tim theo tac gia");
                break;
            case 3:
                System.out.println("Tim theo NXB");
                break;
            case 4:
                System.out.println("Tim theo tieu de");
                break;
            default:
                System.out.println("Phim bam ko hop le");
                break;
        }

    }
}
