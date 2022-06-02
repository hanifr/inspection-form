import React, { Component } from 'react';
import {Button, List } from "semantic-ui-react";
import jsPDF from "jspdf";


const generatePDF = () => {
  
  var content = document.getElementById('txtContent');
  var doc = new jsPDF("p","mm","a4");
  //pdf font format
  doc.setFontSize(14);
  var lineSpacing = 10;
  
  //pdf page format
  var lMargin=15; //left margin in mm
  var rMargin=15; //right margin in mm
  var topbottomMargin=15;
  var currentPosition=20;
  var pdfInMM=210;  // width of A4 in mm
  var splitTitle = doc.splitTextToSize(content.value, (pdfInMM-lMargin-rMargin));
  var pageHeight = doc.internal.pageSize.height;
  console.log(splitTitle);
  
  
  //pdf text append
  for(var i=0; i<splitTitle.length;i++){
    //console.log(splitTitle[i]);
    doc.text(lMargin,currentPosition,splitTitle[i]);
    currentPosition+=lineSpacing;
    if(currentPosition>=(pageHeight-topbottomMargin)){
      doc.addPage();
      currentPosition=topbottomMargin;
    }
  }
  
  
  //pdf metadata
  doc.setProperties({
    title: "Preliminary Inspection Report"
  });
  
  
  //pdf output
  doc.output('dataurlnewwindow');
}

class Success extends Component{
    render(){
      const {
        values: { firstName, lastName, email, phoneNumber, licName, licPosition, licNumber, licEmail }
      } = this.props;
      return (
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>

                <textarea id="txtContent" cols="60" rows="15">
                {firstName}
                </textarea>
                
                <br />

                <button onClick={generatePDF}>Download PDF</button>
                
            </div>
        )
        //<button onClick={() => generatePDF()}>Download PDF</button>
    }
}

export default Success;