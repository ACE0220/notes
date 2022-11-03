  /**
     * 写入文本和读取
     */
   const str = "I am Blob text";
   let blob = new Blob([str], {
     type: "text/plain",
   });

   blob.text().then((res) => {
     console.log(res);
   });

   /**
    * html的写入和读取
    */
   const href = "";
   const download = "123.html";

   const domStr = `<div><div><p>123</p></div></div>`;
   let blob1 = new Blob([domStr], {
     type: "text/html",
   });
   href = URL.createObjectURL(blob1);

   /**
    * 打开本地文件转换成blob
    */
   const img = "";
   function handleChange(e) {
     const files = e.target.files || [];
     if (files.length > 0) {
       let url = URL.createObjectURL(files[0]);
       img = url;
     }
   }

   /**
    * FileRead
    */
   const img1 = "";
   function handleChange1(e) {
     const files = e.target.files || [];
     if (files.length > 0) {
       const fileRead = new FileReader();
       fileRead.onload = function () {
         img1 = fileRead.result;
       };
       fileRead.readAsDataURL(files[0]);
     }
   }