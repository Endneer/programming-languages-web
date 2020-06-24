export function groupBy(arr: any[], prop: string) {
  return arr.reduce((rv, x) => {
    (rv[x[prop]] = rv[x[prop]] || []).push(x);
    return rv;
  }, {});
}
