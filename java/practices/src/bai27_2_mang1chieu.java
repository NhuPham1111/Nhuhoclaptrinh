import java.sql.Array;
import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.Scanner;

public class bai27_2_mang1chieu {
    public static void main(String[] args) {
        /*
        * in mang nhanh:    System.out.println(Arrays.toString(arr));
        * Sap xep mang:     Arrays.sort(arr);
        * */


        /* 8.VD MANG:
        Viet ctrinh tao 1 mang 1 chieu gom cac phan tu la so nguen,
         co n phan tu,
         n do nguoi dung nhap tu ban phim
         */
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap so phan tu mang: ");
        int n = sc.nextInt();
        //tao n phan tu(cap phat bo nho cho mang)
        int[]arr = new int[n];
        System.out.println("Nhap du lieu cho tung phan tu: ");
        for (int i = 0; i< n; i++){
            System.out.println("Arr["+ i +"]=");
            arr[i] = sc.nextInt();
        }
        System.out.println("Mang nguyen ban vua nhap la: ");
        System.out.println(Arrays.toString(arr));

        /* 9. SAP XEP MANG

        *
        * */
    }
}
