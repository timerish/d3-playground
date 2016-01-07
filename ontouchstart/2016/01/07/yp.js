function yp(obj) { 
  body.append('pre')
    .html(js_yaml.dump(obj));
}
yp(yp);
