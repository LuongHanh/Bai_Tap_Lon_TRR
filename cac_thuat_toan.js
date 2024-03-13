/*PHẦN DỮ LIỆU */
const thong_tin_cac_bai_toan = [
    {
        stt_bai_toan: 1,
        ten_bai_toan: "Bài toán đếm",
        de_bai: "Một dãy gồm 10 quả bóng. Bạn muốn chọn một dãy gồm 3 quả bóng. Có bao nhiêu cách chọn nếu thứ tự không quan trọng?",
        phan_tich_bai_toan: "Để giải quyết bài toán này, chúng ta có thể sử dụng công thức tổ hợp, vì chúng ta đang xem xét việc chọn một dãy gồm 3 quả bóng từ 10 quả mà thứ tự không quan trọng."
        +" k phần tử từ một tập hợp gồm n phần tử mà không quan tâm đến thứ tự của các phần tử đó. Công thức tổ hợp được biểu diễn như sau: Công thức tổ hợp được sử dụng để tính số cách chọn C(n,k)= n!/( k!⋅(n−k)!). "
        +" Áp dụng vào bài toán của chúng ta: C(10,3)= 10!/( 3!⋅(10−3)!)."
        +" Vậy có 120 cách chọn dãy gồm 3 quả bóng từ 10 quả mà thứ tự không quan trọng.",
        link_so_do_khoi: "./anh_so_do_khoi/baitoandem.png",
        ten_so_do_khoi: "Đây là sơ đồ khối theo đề bài",
        ten_thuat_toan: "giải thuật khử đệ quy",
    },
    {
        stt_bai_toan: 2,
        ten_bai_toan: "Bài toán tồn tại",
        de_bai: "Bài toán 4 mầu: Cho bản đồ gồn N quốc gia (mô tả bằng ma trận kề: 2 nước I và j là hàng xóm với nhà nhau thì Cij=1, ngược lại Cij=0). Hãy tô bằng 4 màu bản đồ sau cho 2 nước là hàng xóm với nhau thì khác màu nhau",
        phan_tich_bai_toan: "Bài toán này là một dạng của bài toán 'tô màu đồ thị', trong đó chúng ta cố gắng tô màu các đỉnh của đồ thị sao cho hai đỉnh kề nhau không có cùng màu. Trong trường hợp này, đồ thị được mô tả bằng ma trận kề, trong đó mỗi hàng và mỗi cột tương ứng với một quốc gia, và mỗi phần tử C[i][j] bằng 1 nếu quốc gia i và j là hàng xóm với nhau, và 0 nếu không."
        +"Phân tích cụ thể bài toán:"
        +"Dữ liệu đầu vào: Ma trận kề C mô tả mối quan hệ hàng xóm giữa các quốc gia."
        +"Yêu cầu: Tìm cách tô màu cho các quốc gia sao cho không có hai quốc gia kề nhau có cùng màu, và số màu sử dụng là ít nhất."
        +"Phân tích giải pháp:  Thuật toán sẽ thử tất cả các cách tô màu cho các quốc gia một cách đệ quy, từ quốc gia đầu tiên đến quốc gia cuối cùng."
        +"Khi thử một màu cho một quốc gia, chúng ta kiểm tra xem màu đó có thể sử dụng được không, tức là kiểm tra xem màu đã sử dụng cho các quốc gia hàng xóm có trùng màu không."
        +"Nếu một màu không thể sử dụng cho một quốc gia, chúng ta sẽ thử màu khác."
        +"Nếu tất cả các màu đều không thể sử dụng cho một quốc gia, chúng ta sẽ quay lại quốc gia trước đó và thử màu khác."
        +"Quá trình này được lặp lại cho đến khi tất cả các quốc gia được tô màu hoặc không có phương án tô màu hợp lệ.",
        link_so_do_khoi: "./anh_so_do_khoi/baitoantontai.png",
        ten_so_do_khoi: "Đây là sơ đồ khối theo đề bài",
        ten_thuat_toan: "giải thuật đệ quy",
    },
    {
        stt_bai_toan: 3,
        ten_bai_toan: "Bài toán liệt kê",
        de_bai: "Liệt kê tất cả các số tự nhiên có 3 chữ số và không chứa chữ số 5.",
        phan_tich_bai_toan: "Chưa phân tích",
        link_so_do_khoi: "./anh_so_do_khoi/baitoanlietke.png",
        ten_so_do_khoi: "Đây là sơ đồ khối theo đề bài",
        ten_thuat_toan: "giải thuật khử đệ quy",
    },
    {
        stt_bai_toan: 4,
        ten_bai_toan: "Bài toán tối ưu",
        de_bai: "Bài toán cái túi: Một nhà thám hiểm cần đem theo một cái túi có trọng lượng không quá b. Có n đồ vật có thể đem theo. Đồ vật thứ j có trọng lượng là ai và giá trị sử dụng là cj (j = 1, 2,..., n). Hỏi rằng nhà thám hiểm cần đem theo các đồ vật nào để cho tổng giá trị sử dụng của các đồ vật đem theo là lớn nhất?",
        phan_tich_bai_toan: "Dưới đây là một giải thuật đơn giản để giải quyết bài toán cái túi bằng cách sử dụng Quy hoạch động:"
        +" Xây dựng một bảng (hay mảng hai chiều) có kích thước (n+1) x (b+1), trong đó n là số lượng đồ vật và b là trọng lượng tối đa của túi."
        +" Duyệt qua từng đồ vật và tính toán giá trị tối đa có thể đạt được với trọng lượng từ 0 đến b."
        +" Với mỗi đồ vật, nếu trọng lượng của đồ vật đó nhỏ hơn hoặc bằng trọng lượng hiện tại đang xét, so sánh giữa việc chọn đồ vật đó và không chọn đồ vật đó để lựa chọn giá trị lớn nhất."
        +" Lưu giá trị tối đa tìm được vào bảng."
        +" Cuối cùng, giá trị tối đa có thể đạt được sẽ nằm ở phần tử bảng ở dòng cuối cùng và cột có trọng lượng b.",
        link_so_do_khoi: "./anh_so_do_khoi/baitoantoiuu.png",
        ten_so_do_khoi: "Đây là sơ đồ khối theo đề bài",
        ten_thuat_toan: "thuật toán Quy hoạch động (Dynamic Programming).",
    },
    {
        stt_bai_toan: 5,
        ten_bai_toan: "Bài toán tìm kiếm",
        de_bai: "Hãy tìm hiểu thuật toán BFS và cài đặt bằng JS",
        phan_tich_bai_toan: "Dưới đây là một mô tả cơ bản về cách thuật toán BFS hoạt động:"
        +" Bắt đầu từ một đỉnh xuất phát (đỉnh gốc), đánh dấu đỉnh này là đã thăm và thêm nó vào hàng đợi."
        +" Lặp lại các bước sau cho tới khi hàng đợi trống."
        +" Lấy một đỉnh từ đầu hàng đợi và gọi nó là đỉnh hiện tại."
        +" Duyệt qua tất cả các đỉnh kề với đỉnh hiện tại chưa được thăm, đánh dấu chúng là đã thăm và thêm vào hàng đợi."
        +" Khi đã duyệt qua tất cả các đỉnh kề của đỉnh hiện tại, lặp lại bước 2 cho đến khi hàng đợi trống."
        +" Em lấy ví dụ về bài toán người đi du lịch tiết kiệm chi phí để minh họa thuật toán BFS.",
        link_so_do_khoi: "./anh_so_do_khoi/BFS.png",
        ten_so_do_khoi: "Đây là hình ảnh ví dụ về thuật toán BFS",
        ten_thuat_toan: "thuật toán BFS (Breadth-First Search)",
    },
    {
        stt_bai_toan: 6,
        ten_bai_toan: "Bài toán tìm cây khung nhỏ nhất",
        de_bai: "Đồ thị: Tìm cây khung nhỏ nhất bằng thuật toán",
        phan_tich_bai_toan: "Một ví dụ về thuật toán Prim: Tìm cây bao trùm nhỏ nhất",
        link_so_do_khoi: "./anh_so_do_khoi/prim-example.webp",
        ten_so_do_khoi: "Đây là là hình ảnh ví dụ về thuật toán Prim",
        ten_thuat_toan: "thuật toán Prim",
    },
    {
        stt_bai_toan: 7,
        ten_bai_toan: "Bài toán tìm đường đi ngắn nhất",
        de_bai: "Đồ thị: Tìm đường đi ngắn nhất từ 1 đỉnh đến tất cả các đỉnh còn lại",
        phan_tich_bai_toan: "Một ví dụ về thuật toán Floyd: Tìm đường đi từ một đỉnh đến tất cả các đỉnh còn lại",
        link_so_do_khoi: "./anh_so_do_khoi/Floyd.png",
        ten_so_do_khoi: "Đây là là hình ảnh ví dụ về thuật toán Floyd-Warshall",
        ten_thuat_toan: "thuật toán Floyd-Warshall",
    },
]

const id_tagnames = [ 
    {
        stt: 1,
        div_id_1: "bai-toan-dem",
        img_id: "bai-toan-dem-img",
        input_text_id_1: "bai-toan-dem-input-1",
        input_text_id_2: "bai-toan-dem-input-2",
        input_submit_id_1: "bai-toan-dem-submit",
        ket_qua: "bai-toan-dem-ket-qua"
    },
    {
        stt: 2,
        div_id_1: "bai-toan-ton-tai",
        img_id: "bai-toan-ton-tai-img",
        pre_id_1: "bai-toan-ton-tai-pre-1",
        input_submit_id_1: "bai-toan-ton-tai-submit",
        ket_qua: "bai-toan-ton-tai-ket-qua"
    },
    {
        stt: 3,
        div_id_1: "bai-toan-liet-ke",
        img_id: "bai-toan-liet-ke-img",
        input_text_id_1: "bai-toan-liet-ke-input-1",
        input_text_id_2: "bai-toan-liet-ke-input-2",
        input_submit_id_1: "bai-toan-liet-ke-submit",
        ket_qua: "bai-toan-liet-ke-ket-qua"
    },
    {
        stt: 4,
        div_id_1: "bai-toan-toi-uu",
        img_id: "bai-toan-toi-uu-img",
        pre_id_1: "bai-toan-toi-uu-pre-1",
        pre_id_2: "bai-toan-toi-uu-pre-2",
        pre_id_3: "bai-toan-toi-uu-pre-3",
        pre_id_4: "bai-toan-toi-uu-pre-4",
        input_submit_id_1: "bai-toan-toi-uu-submit",
        ket_qua: "bai-toan-toi-uu-ket-qua"
    },
    {
        stt: 5,
        div_id_1: "bai-toan-tim-kiem",
        img_id: "bai-toan-tim-kiem-img",
        pre_id_1: "bai-toan-tim-kiem-pre",
        input_text_id_1: "bai-toan-tim-kiem-input-1",
        input_text_id_2: "bai-toan-tim-kiem-input-2",
        input_submit_id_1: "bai-toan-tim-kiem-submit",
        ket_qua: "bai-toan-tim-kiem-ket-qua"
    },
    {
        stt: 6,
        div_id_1: "bai-toan-cay-khung-nho-nhat",
        img_id: "bai-toan-cay-khung-nho-nhat-img",
        pre_id_1: "bai-toan-cay-khung-nho-nhat-pre",
        input_text_id_1: "bai-toan-cay-khung-nho-nhat-input-1",
        input_text_id_2: "bai-toan-cay-khung-nho-nhat-input-2",
        input_submit_id_1: "bai-toan-cay-khung-nho-nhat-submit",
        lable_id_2: "bai-toan-cay-khung-nho-nhat-lable-2",
        ket_qua: "bai-toan-cay-khung-nho-nhat-ket-qua"
    },
    {
        stt: 7,
        div_id_1: "bai-toan-duong-di-ngan-nhat",
        img_id: "bai-toan-duong-di-ngan-nhat-img",
        pre_id_1: "bai-toan-duong-di-ngan-nhat-pre",
        input_text_id_1: "bai-toan-duong-di-ngan-nhat-input-1",
        input_text_id_2: "bai-toan-duong-di-ngan-nhat-input-2",
        input_submit_id_1: "bai-toan-duong-di-ngan-nhat-submit",
        ket_qua: "bai-toan-duong-di-ngan-nhat-ket-qua"
    },
]

const ten_ham_xu_ly_nut_submit = [
    "Giai_Bai_Toan_Dem()",
    "Giai_Bai_Toan_Ton_Tai()",
    "Giai_Bai_Toan_Liet_Ke()",
    "Giai_Bai_Toan_Toi_Uu()",
    "Giai_Bai_Toan_Tim_Kiem()",
    "Giai_Bai_Toan_Tim_Cay_Khung_Nho_Nhat()",
    "Giai_Bai_Toan_Tim_Duong_Di_Ngan_Nhat()",
]
//-------------------------------------------------------------
/*PHẦN XỬ LÝ VÀ HIỂN THỊ TRÊN TRÌNH DUYỆT */
function Hien_Thi_Nav(){
    let nav = document.getElementById("nav")
    for(let i=-1; i <= thong_tin_cac_bai_toan.length; i++){
        let nav_item = document.createElement('a')
        nav_item.className = "nav-items"
        if(i==-1) {
            nav_item.innerHTML = "Phần giới thiệu"
            nav_item.href = "#phan-dem-gioi-thieu"
            nav_item.id = "nav-bothside"
        }
        else if( i === thong_tin_cac_bai_toan.length){
            nav_item.innerHTML = "Phần tổng kết"
            nav_item.href = "#phan-dem-tong-ket"
            nav_item.id = "nav-bothside"
        }
        else {
            nav_item.innerHTML = thong_tin_cac_bai_toan[i].ten_bai_toan
            nav_item.href = "#phan-dem-"+id_tagnames[i].div_id_1
        }
        nav.appendChild(nav_item)
    }
}

function Hien_Thi_Du_lieu_Dau_Vao(i) {
    switch (i) {
        case 0:
            return '<lable for="">Nhập k </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_1+'" type="text" placeholder="Nhập dữ liệu ban đầu mong muốn..." value = "3">'
            +'<lable for="">Nhập n </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_2+'" type="text" placeholder="Nhập dữ liệu kết thúc mong muốn..." value = "10">'
        case 1:
            return '<pre class="ma-tran-ke" contenteditable = "true" id = "'+id_tagnames[i].pre_id_1+'">'
            +'0111<br>'
            +'1010<br>'
            +'1101<br>'
            +'1010<br>'
            +'</pre>'
            +'<i class="ma-tran-ke-text">Nhập ma trận kề mong muốn.</i>'
        case 2:
            return '<lable for="">Số có mấy chữ số? </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_1+'" type="text" placeholder="Bạn muốn số có mấy chữ số?" value = "3">'
            +'<lable for="">Không chứa chữ số </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_2+'" type="text" placeholder="Số không muốn xuất hiện trong cấu hình" value = "5">'
        case 3:
            return '<span class="">Tên của các đồ vật: </span><pre class="du-lieu-bai-toan-toi-uu" contenteditable = "true" id = "'+id_tagnames[i].pre_id_1+'">Đệm ngủ, Bộ dụng cụ sơ cứu, Lều cắm trại, Dao, Bình nước</pre><br>'
            +'<span class="">Giá trị sử dụng của các đồ vật: </span><pre class="du-lieu-bai-toan-toi-uu" contenteditable = "true" id = "'+id_tagnames[i].pre_id_2+'">60,100,120,75,150</pre><br>'
            +'<span class="">Trọng lượng cẩu các đồ vật: </span><pre class="du-lieu-bai-toan-toi-uu" contenteditable = "true" id = "'+id_tagnames[i].pre_id_3+'">10,20,30,5,15</pre><br>'
            +'<span class="">Trọng lượng tối đa mà túi có thể chứa: </span><pre class="du-lieu-bai-toan-toi-uu" contenteditable = "true" id = "'+id_tagnames[i].pre_id_4+'">50</pre><br>'
        case 4:
        case 5:
            return '<pre class="ma-tran-ke" contenteditable = "true" id = "'+id_tagnames[i].pre_id_1+'">'
            +'0374<br>'
            +'3010<br>'
            +'7105<br>'
            +'4050<br>'
            +'</pre>'
            +'<i class="ma-tran-ke-text">Nhập ma trận kề mong muốn.</i>'
            +'<lable for="">Từ thành phố </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_1+'" type="text" placeholder="Thành phố bắt đầu" value = "3">'
            +'<lable id="'+id_tagnames[i].lable_id_2+'" for="">Đến thành phố  </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_2+'" type="text" placeholder="Thành phố muốn đến" value = "1">'
        case 6:
            return '<pre class="ma-tran-ke" contenteditable = "true" id = "'+id_tagnames[i].pre_id_1+'">'
            +'0379<br>'
            +'3011<br>'
            +'2105<br>'
            +'4050<br>'
            +'</pre>'
            +'<i class="ma-tran-ke-text">Nhập ma trận đường đi mong muốn</i>'
            +'<lable for="">Bắt đầu từ đỉnh </lable>'
            +'<input class="du-lieu-dau-vao-mong-muon" id="'+id_tagnames[i].input_text_id_1+'" type="text" placeholder="Thành phố bắt đầu" value = "3">'
    }
}

function Hien_Thi_Cac_Bai_Toan() {
    let phan_noi_dung = document.getElementById("noi-dung")
    for(let i=0; i < thong_tin_cac_bai_toan.length; i++){
        let phan_bai_toan = document.createElement('div')
        phan_bai_toan.id = id_tagnames[i].div_id_1
        phan_bai_toan.innerHTML = 
                '<div class="phan-dem" id="phan-dem-'+id_tagnames[i].div_id_1+'"></div>'
                +'<h2 class="ten-bai-toan">'+thong_tin_cac_bai_toan[i].ten_bai_toan+'</h2>'
                +'<h3 class="de-bai-text">Đề bài:</h3>'
                +'<p class="de-bai">'+thong_tin_cac_bai_toan[i].de_bai+'</p>'
                +'<div class="bai-lam">'
                    +'<div class="phan-tich-bai-toan">'
                        +'<h3 class="phan-tich-bang-text">Phân tích bài toán:</h3>'
                        +'<p class="phan-tich-bang-chu">'+thong_tin_cac_bai_toan[i].phan_tich_bai_toan+'</p>'
                        +'<p class="ten-thuat-toan">Sử dụng '+thong_tin_cac_bai_toan[i].ten_thuat_toan+'</p>'
                        +'<div class="so-do-khoi">'
                            +'<img id="'+id_tagnames[i].img_id+'" src="'+thong_tin_cac_bai_toan[i].link_so_do_khoi+'" alt="day-la-so-do-khoi"><br>'
                            +'<i class="ten-so-do-khoi">'+thong_tin_cac_bai_toan[i].ten_so_do_khoi+'</i>'
                        +'</div>'
                    +'</div> '
                    +'<div class="du-lieu-dau-vao">'
                        +'<h3 class="du-lieu-dau-vao-text">Phần nhập dữ liệu:</h3>'
                        +Hien_Thi_Du_lieu_Dau_Vao(i)
                        +'<input class="submit" id="'+id_tagnames[i].input_submit_id_1+'" type="submit" value="Hiển thị kết quả" onclick = "'+ten_ham_xu_ly_nut_submit[i]+'">'
                    +'</div>'
                    +'<div class="hien-thi-ket-qua">'
                        +'<h3 class="ket-qua-text">Kết quả:</h3>'
                        +'<p class="ket-qua-bang-chu" id="'+id_tagnames[i].ket_qua+'"></p>'
                    +'</div>'
                +'</div>'
        phan_noi_dung.appendChild(phan_bai_toan)
    } 
}

function Hien_Thi() {
    Hien_Thi_Nav()
    Hien_Thi_Cac_Bai_Toan() 
}
//-------------------------------------------------------------
/*PHẦN THUẬT TOÁN */

// CÁC BIẾN KHỞI TẠO CHUNG CHO TẤT CẢ THUẬT TOÁN
let value_inputs = []
//-------------------------------------------------------------

// Hàm lấy dữ liệu đầu vào
function Lay_Du_Lieu_Input(stt_bai_toan,value_inputs){
    input_tag_1 = document.getElementById(id_tagnames[stt_bai_toan-1].input_text_id_1)
    input_tag_2 = document.getElementById(id_tagnames[stt_bai_toan-1].input_text_id_2)
    if(input_tag_1 !== null ) value_inputs[0] = parseInt(input_tag_1.value) 
    if(input_tag_2 !== null ) value_inputs[1] = parseInt(input_tag_2.value)
}

function Khoi_Tao_Ma_Tran_Ke(stt_bai_toan,ma_tan_ke) {
    let pre_tag = document.getElementById(id_tagnames[stt_bai_toan - 1].pre_id_1).innerText
    C = pre_tag.split('\n'); // costMatrix là ma trận kề ==mảng 2 chiều 
    n_dinh = C.length - 1 

    for(let i=0; i< n_dinh; i++){   //// định nghĩa ma trận kề full 0
        let x = new Array(n_dinh).fill(0)
        ma_tan_ke.push(x)
    }
    for(let i=0; i< n_dinh; i++){
        for(let j=0; j< n_dinh; j++){
            ma_tan_ke[i][j] = parseInt(C[i][j])
        }
    }
}
//-------------------------------------------------------------
// Hàm hiển thị kết quả ra màn hình
function Hien_Thi_Ket_Qua(stt_bai_toan,tag_ket_qua,dem,nghiem) {
    switch (stt_bai_toan) {
        case 1:
            tag_ket_qua.innerHTML = 'Nghiệm : Có ' + nghiem + ' cách chọn nếu thứ tự không quan trọng.<br>'
            break
        case 2:
            tag_ket_qua.innerHTML += 'Nghiệm '+(dem)+': Cách tô màu: ' + nghiem + '<br>'
            break
        case 3:
            tag_ket_qua.innerHTML += 'Nghiệm '+(dem)+': Số ' + nghiem + ' hợp lệ.<br>'
            break
        case 4:
            tag_ket_qua.innerHTML = 'Đồ vật được chọn là: <br>'
            for(let i=0; i < nghiem.length; i++){
                tag_ket_qua.innerHTML += "- "+nghiem[i] + '<br>'
            }
            tag_ket_qua.innerHTML += "Tổng giá trị sử dụng là " + dem
            break
        case 5:
            tag_ket_qua.innerHTML = "Bắt đầu từ thành phố "+value_inputs[0]+" đến thành phố "+value_inputs[1]+" rồi quay lại : <br>"
            +nghiem +"<br>  "
            +"Tổng chi phi đi lại cho chuyến đi là : "+dem +" $"
            break
        case 6:
            tag_ket_qua.innerHTML += "Cây bao trùm nhỏ nhất : <br>"
            for(let i=0; i < nghiem.length; i++){
                tag_ket_qua.innerHTML += "Từ " + nghiem[i][0] + " đến " +  nghiem[i][1] + " ------> Có trọng số là " +  nghiem[i][2] + "<br>"
            }
            tag_ket_qua.innerHTML += "Tổng trọng số của cây là " + dem
            break
        case 7:
            tag_ket_qua.innerHTML += nghiem  + " là "+ dem + " KM<br>"
            break
    }
    
}
//-------------------------------------------------------------
//PHẦN NỘI DUNG CÁC THUẬT TOÁN
/*BÀI TOÁN ĐẾM */
function Giai_Bai_Toan_Dem() {
    const stt_bt = thong_tin_cac_bai_toan[0].stt_bai_toan
    let tag_ket_qua = document.getElementById(id_tagnames[stt_bt-1].ket_qua)
    tag_ket_qua.innerHTML = ''
    // Số lượng quả bóng và số lượng quả bóng bạn muốn chọn
    value_inputs = []
    Lay_Du_Lieu_Input(stt_bt,value_inputs)

    function To_Hop(n,k) {
        if (k > n) return 0
        let result = 1;
        for (let i = 1; i <= k; i++) result *= (n - i + 1) / i;
        return result;
    }
    const nghiem = To_Hop(value_inputs[1],value_inputs[0])
    Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,1,nghiem)
}

/*BÀI TOÁN TỒN TẠI */
function Giai_Bai_Toan_Ton_Tai() {
    const stt_bt = thong_tin_cac_bai_toan[1].stt_bai_toan
    let tag_ket_qua = document.getElementById(id_tagnames[stt_bt-1].ket_qua)
    tag_ket_qua.innerHTML = ''

    let n, C, x = [],dem = 0
    const Color=['ko biết','Xanh','Đỏ','Vàng']
    
    let pre_tag = document.getElementById(id_tagnames[1].pre_id_1).innerText
    C = pre_tag.split('\n'); // C là ma trận kề ==mảng 2 chiều 
    n = C.length - 1; 
    x = new Array(n).fill(0)// khởi tạo chưa tô mầu cho qgia nào


    function Check_Hx_Khac_Mau_Nhau(i) {
        //đã tô màu cho các nước từ x[0]..x[i]:
        //cần check cặp ij mà Cij=1 xem màu khác nhau ko?
        for (var j= 0; j < i; j++)
            if (C[i][j] == 1 && x[i] == x[j])
                return false //ko được
        return true //được
    }

    //tô 1 màu cho x[i]
    function To_Mau_Quoc_Gia(i) {
        for (var mau = 1; mau < n; mau++) {
            x[i] = Color[mau]
            if (Check_Hx_Khac_Mau_Nhau(i)) { //nhánh cận
                if (i == n-1) {
                    //đã đến thằng cuối cùng
                    ++dem
                    Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,dem,x) //suy biến: ko đệ quy
                } else {
                    To_Mau_Quoc_Gia(i + 1) //đệ quy
                }
            }
            x[i] = 0 // quay lui
        }
    }

    To_Mau_Quoc_Gia(0) //tô 1 màu cho quốc gia đầu tiên   
}

/*BÀI TOÁN LIỆT KÊ */
function Giai_Bai_Toan_Liet_Ke() {
    const stt_bt = thong_tin_cac_bai_toan[2].stt_bai_toan
    let tag_ket_qua = document.getElementById(id_tagnames[stt_bt-1].ket_qua)
    tag_ket_qua.innerHTML = ''
    let dem = 0
    value_inputs = []
    Lay_Du_Lieu_Input(stt_bt,value_inputs)
    const cau_hinh_khong_mong_muon = value_inputs[1]

    const so_bat_dau = Math.pow(10, (value_inputs[0] - 1))
    const so_ket_thuc = Math.pow(10, (value_inputs[0]))
    // Liệt kê tất cả các số tự nhiên có 3 chữ số và không chứa chữ số 5
    for (let num = so_bat_dau; num < so_ket_thuc; num++) {
        if (!num.toString().includes(cau_hinh_khong_mong_muon)) {
            ++dem
            Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,dem,num)
        }
    }

}

/*BÀI TOÁN TỐI ƯU */
function Giai_Bai_Toan_Toi_Uu() {
    const stt_bt = thong_tin_cac_bai_toan[3].stt_bai_toan
    let tag_ket_qua = document.getElementById(id_tagnames[stt_bt-1].ket_qua)
    tag_ket_qua.innerHTML = ''

    let ten_do_vat_tag = document.getElementById(id_tagnames[3].pre_id_1).innerText
    let gia_tri_tag = document.getElementById(id_tagnames[3].pre_id_2).innerText
    let trong_luong_tag = document.getElementById(id_tagnames[3].pre_id_3).innerText
    let max_trong_luong_tag = document.getElementById(id_tagnames[3].pre_id_4).innerText
    let cac_do_vat = ten_do_vat_tag.split(/,\s*/).map(String) 
    let cac_gia_tri = gia_tri_tag.split(/,\s*/).map(Number) 
    let trong_luong_cac_vat = trong_luong_tag.split(/,\s*/).map(Number) 
    let max_trong_luong = max_trong_luong_tag.split(/,\s*/).map(Number) 
    let n = cac_gia_tri.length
    let nghiem = []

    function Ba_Lo(max_trong_luong, trong_luong_cac_vat, cac_gia_tri, n) {
        let K = new Array(n + 1);
        for (let i = 0; i < K.length; i++) {
            K[i] = new Array(max_trong_luong + 1).fill(0); 
        }
        // Xây dựng bảng K[][] theo phương pháp từ dưới lên
        for (let i = 0; i <= n; i++) {
            for (let w = 0; w <= max_trong_luong; w++) {
                if (i === 0 || w === 0) {
                    K[i][w] = 0;
                } else if (trong_luong_cac_vat[i - 1] <= w) {
                    K[i][w] = Math.max(cac_gia_tri[i - 1] + K[i - 1][w - trong_luong_cac_vat[i - 1]], K[i - 1][w]);
                } else {
                    K[i][w] = K[i - 1][w];
                }
            }
        }
    
        // Lưu kết quả của cái túi
        let res = K[n][max_trong_luong];
    
        let w = max_trong_luong;
        for (let i = n; i > 0 && res > 0; i--) {
            if (res === K[i - 1][w]) {
                continue;
            } else {
                // Đưa đồ vật này vào túi.
                nghiem.push(cac_do_vat[i - 1] + ' -----> có giá trị sử dụng là: '+ cac_gia_tri[i-1]+' và trọng lượng là: '+trong_luong_cac_vat[i-1])
                // Giảm giá trị của đồ vật này khỏi tổng giá trị
                res -= cac_gia_tri[i - 1];
                w -= trong_luong_cac_vat[i - 1];
            }
        }
        Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,K[n][max_trong_luong],nghiem)
    } 
    Ba_Lo(max_trong_luong, trong_luong_cac_vat, cac_gia_tri, n);
}

/*BÀI TOÁN TÌM KIẾM */
function Giai_Bai_Toan_Tim_Kiem() {
    const stt_bt = thong_tin_cac_bai_toan[4].stt_bai_toan
    let tag_ket_qua =  document.getElementById(id_tagnames[4].ket_qua)
    let pre_tag = document.getElementById(id_tagnames[4].pre_id_1).innerText
    costMatrix = pre_tag.split('\n'); // costMatrix là ma trận kề ==mảng 2 chiều 
    n_dinh = costMatrix.length - 1

    let ma_tran_ke = []
    for(let i=0; i< n_dinh; i++){   //// định nghĩa ma trận kề full 0
        let x = new Array(n_dinh).fill(0)
        ma_tran_ke.push(x)
    }
    for(let i=0; i< n_dinh; i++){   //// khởi tạo ma trận kề từ ma trận chi phí
        for(let j=0; j< n_dinh; j++){
            if(parseInt(costMatrix[i][j]) === 0) ma_tran_ke[i][j] = 0
            else ma_tran_ke[i][j] = 1
        }
    }

    value_inputs = []
    Lay_Du_Lieu_Input(stt_bt,value_inputs)
    let sumcost = 0
  
  // Hàm thực hiện BFS và trả về lộ trình từ start đến end
  function BFS(ma_tran_ke, start, end) {
    const visited = new Array(ma_tran_ke.length).fill(false); // Mảng đánh dấu các đỉnh đã được thăm
    const queue = []; // Hàng đợi để lưu các đỉnh cần duyệt
    const parent = new Array(ma_tran_ke.length).fill(-1); // Mảng để lưu các đỉnh cha
  
    visited[start] = true;
    queue.push(start);
  
    while (queue.length > 0) {
      const currentVertex = queue.shift();
  
      // Kiểm tra nếu đến được đỉnh kết thúc
      if (currentVertex === end) {
        const path = [];
        let current = end;
        // Tạo lộ trình bằng cách lùi lại từ đỉnh kết thúc đến đỉnh bắt đầu
        while (current !== -1) {
          path.unshift(current);
          current = parent[current];
        }
        return path;
      }
  
      // Duyệt qua các đỉnh kề của đỉnh hiện tại
      for (let i = 0; i < ma_tran_ke[currentVertex].length; i++) {
        if (ma_tran_ke[currentVertex][i] === 1 && !visited[i]) {
          visited[i] = true;
          parent[i] = currentVertex;
          queue.push(i);
        }
      }
    }
  
    // Trả về null nếu không tìm thấy đường đi
    return null;
  }
  // Thực hiện BFS từ đỉnh 1 (đỉnh bắt đầu) đến đỉnh 3 (đỉnh kết thúc)
  const path = BFS(ma_tran_ke, value_inputs[0], value_inputs[1]);

  if(path !== null){
    path.push(path[0])
    for(let i=0; i < path.length; i++){
      if(path[i+1] !== undefined) sumcost += parseInt(costMatrix[path[i]][path[i+1]])
      else if(parseInt(costMatrix[value_inputs[1]][value_inputs[0]]) === 0) sumcost *=2
    }
  }
  let nghiem
  // In lộ trình nếu tìm thấy
  if (path) nghiem = "Lộ trình từ thành phố "+value_inputs[0]+" đến thành phố "+value_inputs[1]+" rồi quay lại là  : "+ path.join(" =>> ")
  else nghiem = "Không tồn tại đường đi từ thành phố "+value_inputs[0]+" đến thành phố "+value_inputs[1]

  Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,sumcost,nghiem)
}

/*BÀI TOÁN TÌM CÂY KHUNG NHỎ NHẤT */
function Giai_Bai_Toan_Tim_Cay_Khung_Nho_Nhat() {
    const stt_bt = thong_tin_cac_bai_toan[5].stt_bai_toan
    let tag_ket_qua =  document.getElementById(id_tagnames[5].ket_qua)
    tag_ket_qua.innerHTML = '' //Reset hiển thị kết quả mới
    let ma_tran_duong_di = []
    let tong_trong_so = 0
    
    value_inputs = []
    Lay_Du_Lieu_Input(stt_bt,value_inputs)
    Khoi_Tao_Ma_Tran_Ke(stt_bt,ma_tran_duong_di)

    function Check_Lap_Dinh_Dich(MST, n) {
        for(let i=0; i < n - 1; i++){
            if(MST[i][1] === MST[i+1][1]) MST.splice(i+1)
        }
        return MST
    }

    function PRIM(ma_tran_duong_di) {
        const numVertices = ma_tran_duong_di.length;
        const visited = new Array(numVertices).fill(false);
        const MST = [];
        const queue = [];
        
        // Bắt đầu từ đỉnh 0
        visited[value_inputs[0]] = true;
        for (let i = 0; i < numVertices - 1; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (visited[j]) {
                    for (let k = 0; k < numVertices; k++) {
                        if (!visited[k] && ma_tran_duong_di[j][k] !== 0) {
                            queue.push([j, k, ma_tran_duong_di[j][k]]);
                        }
                    }
                }
            }
            
            // Tìm cạnh nhỏ nhất từ các cạnh kết nối
            let minEdge = queue.reduce((min, curr) => curr[2] < min[2] ? curr : min, queue[0]);
            queue.splice(queue.indexOf(minEdge), 1);
            // Thêm cạnh nhỏ nhất vào cây bao trùm nhỏ nhất (MST)
            MST.push(minEdge);
            visited[minEdge[1]] = true;
        }  
        Check_Lap_Dinh_Dich(MST, MST.length)
        return MST;
    }
    
    const minimumSpanningTree = PRIM(ma_tran_duong_di);
    for(let i=0; i < minimumSpanningTree.length; i++){
        tong_trong_so += minimumSpanningTree[i][minimumSpanningTree[i].length - 1]
    }
    Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,tong_trong_so,minimumSpanningTree)
}

/*BÀI TOÁN TÌM ĐƯỜNG ĐI NGẮN NHẤT */
function Giai_Bai_Toan_Tim_Duong_Di_Ngan_Nhat() {
    const stt_bt = thong_tin_cac_bai_toan[6].stt_bai_toan
    let tag_ket_qua =  document.getElementById(id_tagnames[6].ket_qua)
    tag_ket_qua.innerHTML = ''  //Reset hiển thị kết quả mới
    let ma_tran_duong_di = []
    value_inputs = []
    Lay_Du_Lieu_Input(stt_bt,value_inputs)
    Khoi_Tao_Ma_Tran_Ke(stt_bt,ma_tran_duong_di)

    function FloydWarshall(ma_tran_duong_di) {
        const n = ma_tran_duong_di.length;
        const dist = []
        const next = [] // Ma trận lưu lộ trình
    
        // Khởi tạo ma trận khoảng cách và lộ trình
        for (let i = 0; i < n; i++) {
            dist[i] = []
            next[i] = []
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    dist[i][j] = 0
                    next[i][j] = j
                } else if (ma_tran_duong_di[i][j] === 0) {
                    dist[i][j] = Infinity
                    next[i][j] = null
                } else {
                    dist[i][j] = ma_tran_duong_di[i][j]
                    next[i][j] = j
                }
            }
        }
    
        // Áp dụng thuật toán Floyd-Warshall
        for (let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                        next[i][j] = next[i][k] // Cập nhật lộ trình
                    }
                }
            }
        }
    
        return { distances: dist, next: next };
    }
    // Hiển thị đường đi
    function PrintAllPaths(start, next) {
        const n = next.length
        for (let end = 0; end < n; end++) {
            if (start !== end ) {
                const path = GetPath(start, end, next)
                let nghiem = "Đường đi ngắn nhất từ " + start + " đến " + end + ": <br>"+path
                let min_distances = result.distances[start][end]
                Hien_Thi_Ket_Qua(stt_bt,tag_ket_qua,min_distances,nghiem)
            }
        }
    }
    // Tạo path
    function GetPath(start, end, next) {
        let path = "Từ " + start
        let current = start
        while (current !== end) {
            current = next[current][end]
            path += " ==> " +current
        }
        return path
    }
    
    const result = FloydWarshall(ma_tran_duong_di);
    const start = value_inputs[0];
    PrintAllPaths(start, result.next);
}
//-------------------------------------------------------------


//TIẾN ĐỘ CÔNG VIỆC: ĐÃ XONG
//BUG: 0