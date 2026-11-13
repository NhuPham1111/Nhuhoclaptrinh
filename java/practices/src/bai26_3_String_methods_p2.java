public class bai26_3_String_methods_p2 {
    public static void main(String[] args) {
        //Buoi 3
        /*
         * compareTo, compareToIgnoreCase(ko phan biet chu hoa chu thuong)  => so sanh 2 chuoi
         * Chu y: = 0 neu bang nhau ; > 0 neu lon hon; <0 neu nho hon
         * Noi chuoi dung StringBuilder (khuyen dung)
         * split()  => Tach chuoi tra ve 1 mang
         * toLowercase() => chuyen chu thuong
         * toUpercase() => chuyen chu in hoa
         * toCharArray() => tach chuoi thanh tung ki tu, cho vao mang
         * reverse () => dao nguoc chuoi
         * */

        //Vd compare
        String s25 = "Abc12345";
        String s26 ="abc12345";
         int x = s25.compareToIgnoreCase(s26);
         int y = s25.compareTo(s26);
        System.out.println("compareToIgnoreCase x: "+x);
        System.out.println("compareTo y: "+ y);

        //Vd Noi chuoi dung StringBuilder
        StringBuilder s27 = new StringBuilder("nhu");
        s27.insert(3,"xinh");
        System.out.println(s27);

        //VD tach chuoi dung split
        String s38 = "Hello, Nhu";
        String[] arr = s38.split(", ");
        //duyet mang
        for (int i= 0; i< arr.length; i++){
            System.out.println(arr[i]);
        }

        //VD tach cuoi thanh tung ki tu dung toCharArray
        String s42 ="abda3&@";
        char[] arr2 = s42.toCharArray();
        //duyet mang 2
        for (int i= 0; i< arr2.length; i++){
            System.out.println(arr2[i]);
        }

        //VD dao nguoc chuoi dung reverse
        String s43 = "1234dsfhkfn";
        System.out.println("s43: " + s43);
        //Khai bao doi tuong thuoc class StringBuilder
        StringBuilder sb = new StringBuilder(s43);
        sb.reverse().toString();
        System.out.println("reverse: " + sb);
    }

}
