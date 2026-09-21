public class bai26_String_StringBuilder {
    public static void main(String[] args) {
        String s = "Nhu xinh ne" +
                "\nNhu xinh cham chi lam nha";
        System.out.println(s);
        // StringBuilder: la lop dung de quan ly (tạo và thao tác ) 1 chuoi co the thay doi kich thuoc (mutable) va noi dung
        /*Có thể thay đổi (Mutable): Khác với lớp String truyền thống (vốn là bất biến - mỗi lần nối chuỗi sẽ tạo ra đối tượng mới),
         StringBuilder cho phép chỉnh sửa nội dung trực tiếp trên cùng một đối tượng

         Không đồng bộ (Not Synchronized): Lớp này không hỗ trợ an toàn luồng (thread-safe), nhưng nhờ vậy mà nó chạy nhanh hơn
         nhiều so với StringBuffer trong các ứng dụng đơn luồng (single-threaded)

         */
        //Khoi tao:
        StringBuilder sb = new StringBuilder();

        /*Cac method thuong dung voi SB
        * 1/append(string)          => them string vao cuoi chuoi goc
        * 2/insert(index, string)   => Chen string vao vi tri index
        * 3/delete(start, end)      => Xoa tat ca cac ky tu vi tri start -> vtri end-1
        * 4/string.length()         => do dai cua chuoi
        * 5/indexOf                 => Kt vi tri xuat hien dau tien cua ki tu hoac chuoi => return -1 neu ko thay
        * 6/lastIndexOf             => Kt vi tri xuat hien cuoi cung cua ki tu hoac chuoi => return -1 neu ko thay
        * 7/contains                => Kiem tra chuoi con
        * 8/substring               => lay 1 chuoi con tu 1 chuoi dai hon
        *                           substring(int beginIndex)
        *                           substring(int beginIndex, int endIndex)
        *9/replace("str old", "str new")        => thay the toan bo chuoi old bang chuoi new
        *10/ replaceFirst("str old", "str new") => thay the toan bo chuoi old dau tien tim thay bang chuoi new
        * 11/trim()                             => xoa toan bo khoan trang o dau va cuoi cua chuoi
        * 12/Meo xoa toan bo khoang trang cuoi:
        * cach 1: bieu thuc chinh quy (regular expression)
        * cach 2: dung \s+$ de xoa tca khoang trang o cuoi chuoi
        * Trong regular expression
        *   \s+ dai dien cho 1 hoac nhieu khoang trang lien tiep
        *   $   dai dien cho ket thuc dong
        *   \s+$    dai dien cho 1 hoac nhieu khoang trnag lien tiep truoc ket thuc dong
        *   \ la ki tu dac biet nen trong java can them 1 dau \ truoc no
        * */
        System.out.println("\nTest method 1->4: append, insert, delete, length");
        sb.append("Xin chao, ");
        sb.append("Nhu Xinh");
        sb.append("Nhu hom nay hoc ve String");
        sb.insert(8, " Nhu");
        sb.delete(13,22);
        System.out.println(sb);
        System.out.println("chuoi co chieu dai la: "+ sb.length());

        System.out.println("\nTest method 5->6: ");
        String s7 = "nhu di tim nhu";
        System.out.println("chuoi s7 ban dau: "+ s7);
        System.out.println("indexOf 'di' trong s7: " +  s7.indexOf("di"));
        System.out.println("lastIndexOf 'nhu' s7: " +  s7.lastIndexOf("nu"));

        System.out.println("\nTest method 7: contain");
        String s9=".mp3";
        String s10 = "nhu.mp3";
        boolean check = s10.contains(s9);
        System.out.println("chuoi s9: "+ s9);
        System.out.println("chuoi s10: "+ s10);

        if(check){
            System.out.println("s10 co chua s9");
        }else {
            System.out.println("s10 ko chua s9");
        }
        System.out.println("\nTest method 8: substring");
        String s11="n1234567890";
        String s12 = s11.substring(2);//lay tu 2-gan cuoi
        String s13 = s11.substring(4,7); //lay tu 4-6
        System.out.println("chuoi s11: "+ s11);
        System.out.println("chuoi s12 lay tu vi tri 2 cua s11: "+ s12);
        System.out.println("chuoi s13 lay tu vi tri 4-6 cua s11: "+ s13);

        System.out.println("\nTest method 9: replace");
        String s14 = "Nhu day ne";
        String s15 = s14.replace("Nhu", "Ban");
        System.out.println("chuoi s14: "+ s14);
        System.out.println("chuoi s15 thay Nhu -> Ban trong s14: "+ s15);

        System.out.println("\nTest method 10: replaceFirst");
        String s16 = "Ban di dau do Nhu?";
        System.out.println("chuoi s16: "+ s16);
        String s17 = s16.replaceFirst("Ban","Nhu");
        System.out.println("chuoi s17 thay Ban -> Nhu dau tien trong s16: "+ s17);

        System.out.println("\nTest method 11: trim()");
        String s18 = "           Biet ai ko?      ";
        System.out.println("chuoi s18: "+ s18);
        String s19 = s18.trim();
        System.out.println("s19 la s18 sau khi xoa khoan trang: "+s19);

        System.out.println("\nTest method 12:  xoa toan bo khoang trang o cuoi \ncach 1: bang regular expression");
        String s20 = s18.replaceAll("\\s+$","");
        System.out.println("chuoi s18: "+ s18 + "\ns18 co length = "+ s18.length());
        System.out.println("chuoi s20 sau khi xoa khoang trang cuoi: "+ s20 + "\ns20 co length = "+ s20.length());
        System.out.println("\ncach 2: dung vong lap");
        System.out.println("chuoi s18: "+ s18);




    }
}
