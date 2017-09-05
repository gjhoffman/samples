function get_autocomplete_source() {

  if (jQuery("#search-input").hasClass("search-by-school")) {

    jQuery(".search-field").autocomplete({

      source: ["Bloomberg New York","Bloomberg Sao Paulo","CUNY Brooklyn College","Carnegie Mellon University","Central University of Finance and Economics","Cooper Union for the Advancement of Science and Art","Cornell University","Duke University","Fudan University","Glion Institute of Higher Education ","Johns Hopkins University","Massachusetts Institute of Technology","Peking University","Rutgers University","SUNY University at Buffalo","Shanghai International Studies University ","Shanghai Jiao Tong University","Shanghai University of Finance and Economics","Spelman College","The College of New Jersey","Tsinghua University","University of British Columbia","University of California-Los Angeles","University of Florida","University of Illinois at Urbana-Champaign","University of International Business and Economics","University of Southern California","University of Toronto","University of Waterloo","Virginia Tech","Yale University"]
    });

  }

  if (jQuery("#search-input").hasClass("search-by-country")) {

    jQuery(".search-field").autocomplete({
      source: ["Brazil","Canada","China","United Kingdom","United States"]
    });
  }

  if (jQuery("#search-input").hasClass("search-by-type")) {

    jQuery(".search-field").autocomplete({
      source: ["Campus Event","Career Fair","Diversity Event","Information Session","Networking","Office Event","On Campus Interviews","Tech Talk"]
    });
  }
}
