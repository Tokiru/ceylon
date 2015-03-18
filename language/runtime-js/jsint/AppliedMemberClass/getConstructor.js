function(nm,$mpt){
  var mm=getrtmm$$(this.tipo);
  //Member Type Name
  var mtn=mm.d[mm.d.length-1];
  var startingType=this.container;
  while (is$(startingType,{t:Class$meta$model})) {
    mtn+='$'+startingType.declaration.name;
    startingType=startingType.container;
  }
  var fn=mtn+"_"+(nm===''?mm.d[mm.d.length-1]:nm);
  var cn=this.tipo[fn];
  if (cn) {
    mm=getrtmm$$(cn);
    if (mm.d[mm.d.length-2]==='$cn') {
      var args=mm.ps?tupleize$params(mm.ps,this.$targs):empty();
      return AppliedMemberConstructor$jsint(cn,
             {Type$AppliedMemberConstructor:this.$$targs$$.Type$AppliedMemberClass,
              Container$AppliedMemberConstructor:this.$$targs$$.Container$AppliedMemberClass,
              Arguments$AppliedMemberConstructor:args},undefined,this.$targs);
    }
  }
  return null;
}
