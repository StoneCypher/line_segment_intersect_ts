function t([t,n],[r,a],[u,e]){return r<=Math.max(t,u)&&r>=Math.min(t,u)&&a<=Math.max(n,e)&&a>=Math.min(n,e)}function n([t,n],[r,a],[u,e]){const i=(a-n)*(u-r)-(r-t)*(e-a);return 0===i?0:i>0?1:2}function r(r,a,u,e){let i=n(r,a,u),o=n(r,a,e),c=n(u,e,r),h=n(u,e,a);return i!==o&&c!==h||!(0!==i||!t(r,u,a))||!(0!==o||!t(r,e,a))||!(0!==c||!t(u,r,e))||!(0!==h||!t(u,a,e))}export{r as intersects};
