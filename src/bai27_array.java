public class bai27_array {
    public static void main(String[] args) {
        /*MẢNG: là tập hợp các đối tượng có thể cùng hoặc khác kiểu dữ liệu
        * Kích thước cố đinh ko thể thay đổi
        * index bắt đầu = 0
        *
        * TẠI SAO DÙNG MẢNG ?
        * Gom nhóm đối tượng có chung tính chất với nhau
        * Giúp code gọn, sạch hơn
        *
        * 2. CẤU TRÚC
        * data type [] <tên mảng> = new data type [] {gt1,gt2,gt3...}
        * 3.KHAI BAO MANG
        * 4. TRUY XUAT PHAN TU MANG
        * 5. legth() -> tra ve so phan tu cua mang
        * 6. DUYET MANG
        * Cach 1: dung de xuat cac phan tu
        *         for(int pt : mang){ System.out.println(pt)}
        * Cach 2: dung for duyet index
        *         for(int i =0; i < mang.length; i++){}
        * 7.THAY DOI GIA TRI CHO MANG
        *
        * */

        //3.KHAI BAO MANG
        String[] mangStr;
        int [] mangNguyen;
        Float[] mangFl;
        Double[] mangDouble;

        //Khoi tao mang kem kich thuoc (cap phat bo nho)
        String [] mangStr2 = new String[12]; //chua 12 phan tu
        int [] mangNguyen2 = new int[7];

        //Khoi tao mang kem gia tri ban dau
        String [] mangStr3 = new String[]{"nhu1", "nhu2","nhu3"};
        int[] mangNguyen3 = new int[]{1,2,3,4,5};

        //4. TRUY XUAT PHAN TU MANG
        //theo index
        System.out.println(mangNguyen3[2]);
        System.out.println(mangNguyen3[4]);

        //mangStr2 da duoc cap phat bo nho nhung chua khoi tao giatri -> null
        System.out.println(mangStr2[0]);

        //mangStr chua cap phat bo nho, chua khoi tao -> loi chua khoi tao
        //System.out.println(mangStr[0]);

        //6 DUYET MANG
        //Cach 1: for xuat phan tu
        int[] mang4 = new int[]{1,2,3,4,5,6,7};
        for (int i: mang4){
            System.out.println(i);
        }
        //Cach 2: dung for duyet theo index
        String[] mang5 = new String[]{"Hom nay", "Nhu","xinh", "qua ne"};
        for (int i=0; i< mang5.length; i++){
            System.out.print(mang5[i] + " ");

        }

        //7. thay doi gia tri mang
        System.out.print("\n");
        mang5[1] = "Ami";
        for (int i=0; i< mang5.length; i++){
            System.out.print(mang5[i]+" ");
        }




    }
}
