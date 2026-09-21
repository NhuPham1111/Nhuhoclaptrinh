import java.sql.SQLOutput;
import java.util.Scanner;

public class bai25_char {
    public static void main(String[] args) {
        //1.Khai bao & khoi tao
        char ch = 'a';
        char ch1 = 66; //B trong ASCII
        //char ch2 = "a"; ko dc dung "" vi la String
        System.out.println("1. ch1 la: " + ch1);
        char ch3;

        //2.Lay char tu du lieu nhap vao
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Nhap vao 1 ki tu:");
//        String input =sc.nextLine();
//        char ch4 = input.charAt(0); //lay ki tu dau tien
//        System.out.println("2.Ki tu nhap vao la: "+ ch4);

        //3. compareTo : so sanh 2 ki tu => tra ve 1 so nguyen (dung lop Character)
        /*So sanh dua vao ma ASCII
        * 2 ki tu trung khop nhau Compare = 0
        * Ki tu 1 < Ki tu 2 => kq am
        * Ki tu 1 > Ki tu 2 => kq duong        *
        * */
        System.out.println("3. Kq compare b,b = " +Character.compare('b','b'));
        System.out.println("Kq compare A,b = " +Character.compare('A','b'));

        /*4. char method
        * Character.isDigit() => True neu la chu so
        * Character.isLetter() => True neu la chu cai
        * Character.isWhitespace() => True neu la space
        * Character.isLowerCase() => True neu la ki tu thuong vd abc
        * Character.isUpperCase() => True neu la ki tu in hoa vd ABC        *
        * */
        char ch5 = '7';
        char ch6 = 'n';
        char ch7 = ' ';
        char ch8 = 'a';
        char ch9 = 'B';
        System.out.println("4. char method test:");
        System.out.println("ch5 = "+ ch5 + " isDigit: "+ Character.isDigit(ch5));
        System.out.println("ch6 = "+ ch6 + " isLetter: "+ Character.isLetter(ch6));
        System.out.println("ch7 = "+ ch7 + " isWhitespace: "+ Character.isWhitespace(ch7));
        System.out.println("ch8 = "+ ch8 + " isLowerCase: "+ Character.isLowerCase(ch8));
        System.out.println("ch9 = "+ ch9 + " isUpperCase: "+ Character.isUpperCase(ch9));


    }
}
