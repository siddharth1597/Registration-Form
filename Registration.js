var languages_value = [];

function select_languages(select) {

  var value = select.value;
  var text = select.options[select.selectedIndex].text;

  if (Object.keys(languages_value).length == 0) {
    document.getElementById('add_languages').innerHTML = '';
  }

  if (Object.keys(languages_value).length < 5 && value != 'none' && !(value in languages_value)) {
    languages_value[value] = text;
    console.log(languages_value);

    document.getElementById('add_languages').innerHTML += '<span id=' + value + value + ' class="badge badge-secondary mr-2 mt-1"><span>' + text +
      '</span><button type="button" id=' + value + ' class="close pl-2" aria-label="Close" onclick="Remove_Language(this.id)"><span aria-hidden="true">&times;</span></button></span>';
  }
  else if (value in languages_value) {
    alert('Already added');
  }
  else {
    if (value != 'none') {
      alert('Maximum limit is upto 5');
    }
  }

}

function Remove_Language(val) {
  var remove_lang = document.getElementById(val + val);
  remove_lang.remove();
  delete languages_value[val];
  if (Object.keys(languages_value).length == 0) {
    document.getElementById('add_languages').innerHTML = '---Add upto 5 languages---';
  }
  return false;
}
