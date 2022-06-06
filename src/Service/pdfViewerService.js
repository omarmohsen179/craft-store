async function OpenPDFWindow(main) {
    let pdf = 'data:application/pdf;base64,' + main;
    let mywindow = window.open("", "", "width=800,height=600,left=200,top=200")
    mywindow.document.write(" <embed src='" + pdf + "' width='100%' height='100%' />");
}
export default OpenPDFWindow