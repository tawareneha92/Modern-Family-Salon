/* @ds-bundle: {"format":4,"namespace":"NueStudioDesignSystem_59fc92","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"TeamCard","sourcePath":"components/content/TeamCard.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"ImageFrame","sourcePath":"components/core/ImageFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Sparkle","sourcePath":"components/core/Sparkle.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"bd3b9ab324cb","components/content/FeatureCard.jsx":"222394dfd77d","components/content/ServiceCard.jsx":"ca2a074ba03e","components/content/TeamCard.jsx":"8458377f66e9","components/content/Testimonial.jsx":"c25019059cc7","components/core/Button.jsx":"56111d06fef9","components/core/Eyebrow.jsx":"dffdcca9d6de","components/core/ImageFrame.jsx":"4a136a3ed8ab","components/core/SectionHeading.jsx":"4d3b9e53a486","components/core/Sparkle.jsx":"257d779dfbfe","components/forms/Field.jsx":"5cebab2bce1c","components/navigation/SiteFooter.jsx":"e68b168caebf","components/navigation/SiteHeader.jsx":"faedd89866c4","ui_kits/website/App.jsx":"b373dab9aeb0","ui_kits/website/Contact.jsx":"8d3e78e36aa5","ui_kits/website/Home.jsx":"1462515bd3e5","ui_kits/website/Journal.jsx":"89028362dda6","ui_kits/website/Sections.jsx":"ee9d15fb6722","ui_kits/website/Services.jsx":"93f072281c25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NueStudioDesignSystem_59fc92 = window.NueStudioDesignSystem_59fc92 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  openIndex = null,
  onToggle,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(openIndex);
  const current = onToggle ? openIndex : internal;
  const toggle = i => onToggle ? onToggle(current === i ? null : i) : setInternal(current === i ? null : i);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      maxWidth: 'var(--accordion-max)',
      width: '100%',
      ...style
    }
  }, rest), items.map((it, i) => {
    const open = current === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--border-default)',
        borderRadius: open ? 'var(--radius-md)' : 'var(--radius-pill)',
        background: open ? 'rgba(223,197,165,.28)' : 'transparent',
        transition: 'background-color var(--dur-hover) var(--ease-out), border-radius var(--dur-hover) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '100%',
        minHeight: '56px',
        padding: '0 var(--space-lg) 0 var(--space-xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-md)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        color: 'var(--text-primary)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: '22px',
        color: 'var(--text-accent)',
        lineHeight: 1,
        transform: open ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-hover) var(--ease-out)'
      }
    }, "+")), open && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 var(--space-xl) var(--space-lg)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-small)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-secondary)'
      }
    }, it.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  white: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  beige: {
    background: 'var(--surface-card-beige)',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  gold: {
    background: 'rgba(181,139,85,.12)',
    color: 'var(--text-primary)',
    border: '1px solid rgba(181,139,85,.35)'
  }
};
function FeatureCard({
  title,
  description,
  icon,
  tone = 'white',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      padding: 'var(--space-xl)',
      borderRadius: 'var(--radius-md)',
      ...tones[tone],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-accent)'
    }
  }, icon), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-nav)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  meta,
  divider = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      padding: divider ? '0 0 0 var(--space-xl)' : 0,
      borderLeft: divider ? '1px solid var(--border-on-dark)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '21px',
      lineHeight: 1.5,
      color: 'var(--text-on-dark)'
    }
  }, quote), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-on-dark)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-button)',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: 'var(--ls-button)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background-color var(--dur-hover) var(--ease-out), color var(--dur-hover) var(--ease-out), border-color var(--dur-hover) var(--ease-out)'
};
const sizes = {
  sm: {
    height: '36px',
    padding: '0 20px',
    fontSize: '10px'
  },
  md: {
    height: '44px',
    padding: '0 26px'
  },
  lg: {
    height: '52px',
    padding: '0 34px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  hovered = false,
  children,
  style,
  ...rest
}) {
  const variants = {
    primary: {
      background: hovered ? 'var(--btn-primary-bg-hover)' : 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: hovered ? 'var(--espresso)' : 'transparent',
      color: hovered ? 'var(--text-on-dark)' : 'var(--btn-secondary-text)',
      border: '1px solid var(--btn-secondary-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      padding: 0,
      height: 'auto',
      textDecoration: hovered ? 'underline' : 'none',
      textUnderlineOffset: '6px'
    },
    onDark: {
      background: hovered ? 'rgba(246,241,235,.86)' : 'var(--text-on-dark)',
      color: 'var(--espresso)',
      border: '1px solid transparent'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(disabled ? {
        opacity: .4,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'muted',
  withRule = false,
  style,
  ...rest
}) {
  const color = tone === 'gold' ? 'var(--text-accent)' : tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), withRule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '1px',
      background: 'currentColor',
      opacity: .5
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shapes = {
  rounded: 'var(--radius-image)',
  large: 'var(--radius-image-lg)',
  arch: 'var(--radius-arch)',
  asymmetric: 'var(--radius-asym)',
  square: '0px'
};
function ImageFrame({
  src,
  alt = '',
  shape = 'rounded',
  ratio = '3 / 4',
  caption,
  decor = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: 'relative',
      margin: 0,
      ...style
    }
  }, rest), decor && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-7% -7% auto auto',
      width: '58%',
      opacity: .55,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M398 200C398 90.6 309.4 2 200 2",
    stroke: "var(--decor-line)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M370 200c0-93.9-76.1-170-170-170",
    stroke: "var(--decor-gold)",
    strokeWidth: "1",
    opacity: ".6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: shapes[shape],
      overflow: 'hidden',
      background: 'var(--surface-card-beige)',
      boxShadow: 'var(--shadow-image)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(48,34,31,.45)',
      textAlign: 'center',
      padding: '0 12%'
    }
  }, alt || 'Editorial photography')), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  title,
  duration,
  price,
  description,
  image,
  imageAlt,
  reverse = false,
  shape = 'asymmetric',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
      gap: 'var(--space-3xl)',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    alt: imageAlt || title,
    shape: shape,
    ratio: "4 / 3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 1 : 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)'
    }
  }, duration && /*#__PURE__*/React.createElement(Meta, {
    label: "Duration",
    value: duration
  }), price && /*#__PURE__*/React.createElement(Meta, {
    label: "From",
    value: price
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-h3)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      maxWidth: '42ch'
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 'var(--space-sm)'
    }
  }, "Book Now")));
}
function Meta({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      color: 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TeamCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TeamCard({
  name,
  role,
  description,
  image,
  shape = 'arch',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    alt: name,
    shape: shape,
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '26px',
      lineHeight: 1.1,
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, role)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const levelSize = {
  hero: ['var(--fs-hero)', 'var(--lh-hero)'],
  h1: ['var(--fs-h1)', 'var(--lh-h1)'],
  h2: ['var(--fs-h2)', 'var(--lh-h2)'],
  h3: ['var(--fs-h3)', 'var(--lh-h3)']
};
function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  level = 'h2',
  align = 'left',
  onDark = false,
  children,
  style,
  ...rest
}) {
  const [fs, lh] = levelSize[level];
  const Tag = level === 'hero' ? 'h1' : level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--measure)' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'onDark' : 'muted'
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-regular)',
      fontSize: fs,
      lineHeight: lh,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      textWrap: 'pretty'
    }
  }, title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-accent)'
    }
  }, accent))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, description), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sparkle({
  size = 14,
  color = 'var(--decor-gold)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M12 0c.6 6.3 5.1 11 11.4 12C17.1 13 12.6 17.7 12 24c-.6-6.3-5.1-11-11.4-12C6.9 11 11.4 6.3 12 0Z",
    fill: color
  }));
}
Object.assign(__ds_scope, { Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  rows,
  onDark = false,
  style,
  ...rest
}) {
  const ink = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const line = onDark ? 'var(--border-on-dark)' : 'var(--border-default)';
  const shared = {
    all: 'unset',
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-body)',
    color: ink,
    borderBottom: `1px solid ${line}`,
    paddingBottom: 'var(--space-sm)',
    transition: 'border-color var(--dur-hover) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label), rows ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      ...shared,
      resize: 'none',
      lineHeight: 'var(--lh-body)'
    }
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: shared
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  brand = 'Nue Studio',
  columns = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: 'var(--space-4xl) var(--space-2xl) var(--space-xl)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) repeat(auto-fit,minmax(140px,1fr))',
      gap: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '46px',
      lineHeight: 1
    }
  }, brand), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-on-dark)',
      textDecoration: 'none',
      opacity: .85
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-4xl) auto 0',
      paddingTop: 'var(--space-lg)',
      borderTop: '1px solid var(--border-on-dark)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-on-dark-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  brand = 'Nue Studio',
  links = ['Home', 'Services', 'Blog', 'Contact'],
  active = 'Home',
  onNavigate,
  cta = 'Book Now',
  onCta,
  onDark = false,
  style,
  ...rest
}) {
  const ink = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-xl)',
      padding: '0 var(--space-2xl)',
      borderBottom: `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-default)'}`,
      background: onDark ? 'var(--surface-inverse)' : 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Home');
    },
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '26px',
      letterSpacing: '.02em',
      color: onDark ? 'var(--text-on-dark)' : 'var(--gold)',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-nav)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: l === active ? 'var(--text-accent)' : ink,
      opacity: l === active ? 1 : .78,
      transition: 'var(--transition-hover)'
    }
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: onDark ? 'onDark' : 'primary',
    size: "sm",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  SiteHeader
} = window.NueStudioDesignSystem_59fc92;
function App() {
  const [page, setPage] = React.useState('Home');
  const go = p => {
    setPage(p === 'Blog' ? 'Journal' : p);
    window.scrollTo({
      top: 0
    });
  };
  const screens = {
    Home: /*#__PURE__*/React.createElement(Home, {
      onNavigate: go
    }),
    Services: /*#__PURE__*/React.createElement(Services, {
      onNavigate: go
    }),
    Journal: /*#__PURE__*/React.createElement(Journal, null),
    Contact: /*#__PURE__*/React.createElement(Contact, null)
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: page === 'Journal' ? 'Blog' : page,
    onNavigate: go,
    onCta: () => go('Contact')
  }), /*#__PURE__*/React.createElement("main", {
    key: page,
    className: "reveal"
  }, screens[page]), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeading,
  Field,
  Button,
  ImageFrame,
  Eyebrow
} = window.NueStudioDesignSystem_59fc92;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-5xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Visit",
    level: "h1",
    title: "Contact",
    accent: "Nue Studio",
    description: "14 Calder Street. Tuesday to Saturday, 9.30 \u2013 18.00."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, [['Telephone', '0161 555 0148'], ['Email', 'hello@nuestudio.com'], ['Instagram', '@nue.studio']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      paddingBottom: 'var(--space-md)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-2xl)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      minHeight: 300,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    withRule: true
  }, "Received"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '30px',
      lineHeight: 1.2
    }
  }, "Thank you \u2014 we will reply within a day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send Another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    withRule: true
  }, "Request an appointment"), /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Treatment",
    placeholder: "Builder gel manicure"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    rows: 3,
    placeholder: "Preferred days and times\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Send Request"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "large",
    ratio: "21 / 9",
    alt: "The studio on Calder Street"
  })), /*#__PURE__*/React.createElement(Faq, null));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  ImageFrame,
  Sparkle,
  TeamCard,
  Eyebrow
} = window.NueStudioDesignSystem_59fc92;
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sect reveal",
    style: {
      paddingTop: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Nails",
    level: "hero",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Manicure And", /*#__PURE__*/React.createElement("br", null), "Pedicure"),
    accent: "Nail Salon",
    description: "A small studio on Calder Street for considered nail care. One artist, one guest, unhurried."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Services')
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 22,
    style: {
      position: 'absolute',
      right: 10,
      top: -14,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(Sparkle, {
    size: 14,
    style: {
      position: 'absolute',
      left: -20,
      bottom: 70,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    decor: true,
    shape: "arch",
    ratio: "4 / 5",
    alt: "Beauty portrait \u2014 hands and nails"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement(Promises, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "asymmetric",
    ratio: "4 / 5",
    alt: "Nail care detail"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Story",
    level: "h2",
    title: "About Us",
    description: "Nue Studio opened in 2019 with one chair and a short list of treatments. We have grown slowly on purpose: four artists, natural-looking finishes, and enough time in every appointment to do the work properly."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "Nail health comes first. If a set will not last, we will say so and suggest something that will."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('Journal')
  }, "Read The Journal")))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "The Artists",
    level: "h2",
    title: "Our Team",
    style: {
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(TeamCard, {
    name: "Lily",
    role: "Nail Artist",
    description: "Structured gel and natural shapes."
  }), /*#__PURE__*/React.createElement(TeamCard, {
    name: "Maryanne",
    role: "Nail Artist",
    description: "Colour work and hand-painted detail."
  }), /*#__PURE__*/React.createElement(TeamCard, {
    name: "Noor",
    role: "Pedicurist",
    description: "Restorative foot and nail care."
  }), /*#__PURE__*/React.createElement(TeamCard, {
    name: "\xC9lise",
    role: "Studio Manager",
    description: "Bookings, tea, and the calendar."
  })))), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(GiftCard, null), /*#__PURE__*/React.createElement(Faq, null));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Journal.jsx
try { (() => {
const {
  SectionHeading,
  ImageFrame,
  Eyebrow,
  Button
} = window.NueStudioDesignSystem_59fc92;
const POSTS = [{
  title: 'How to make builder gel last four weeks',
  tag: 'Care',
  date: 'August 2026',
  shape: 'asymmetric'
}, {
  title: 'The twelve shades we keep on the shelf',
  tag: 'Colour',
  date: 'July 2026',
  shape: 'rounded'
}, {
  title: 'What a consultation actually covers',
  tag: 'Studio',
  date: 'June 2026',
  shape: 'rounded'
}, {
  title: 'Cuticle oil: the only homework we set',
  tag: 'Care',
  date: 'May 2026',
  shape: 'asymmetric'
}];
function Journal() {
  const [feature, ...rest] = POSTS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Journal",
    level: "h1",
    title: "Notes From The Studio",
    description: "Short pieces on nail health, colour and the way we work.",
    style: {
      margin: '0 auto',
      alignItems: 'center'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 'var(--space-3xl)',
      alignItems: 'center',
      marginBottom: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "large",
    ratio: "4 / 3",
    alt: feature.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    withRule: true
  }, feature.tag, " \xB7 ", feature.date), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-h2)',
      fontWeight: 400
    }
  }, feature.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "Wear, growth and water do most of the damage. A short routine handles all three."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Read Article"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-xl)'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: p.shape,
    ratio: "4 / 3",
    alt: p.title
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, p.tag, " \xB7 ", p.date), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      lineHeight: 1.2,
      fontWeight: 500
    }
  }, p.title))))), /*#__PURE__*/React.createElement(GiftCard, null));
}
Object.assign(window, {
  Journal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Journal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SiteHeader,
  SiteFooter,
  SectionHeading,
  Button,
  ImageFrame,
  Sparkle,
  FeatureCard,
  TeamCard,
  Testimonial,
  Accordion,
  ServiceCard,
  Eyebrow,
  Field
} = window.NueStudioDesignSystem_59fc92;
function Shell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, children);
}
function Section({
  children,
  tone = 'page',
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    raised: 'var(--surface-raised)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    className: "sect",
    style: {
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Shell, null, children));
}
function LineIcon({
  name,
  size = 22
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': 1.2
        }
      });
    }
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'flex'
    }
  });
}
function Promises() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "white",
    title: "Quality",
    description: "Salon-grade products, sterilised tools, no shortcuts.",
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      name: "gem"
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "beige",
    title: "Friendly",
    description: "One artist, one guest, for the whole appointment.",
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      name: "hand-heart"
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "gold",
    title: "Fast",
    description: "Most treatments finish inside ninety minutes.",
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      name: "clock-3"
    })
  }));
}
function Testimonials() {
  const quotes = [{
    quote: 'The calmest hour of my month. I have never had a shape hold this well.',
    name: 'Amara O.',
    meta: 'Builder gel'
  }, {
    quote: 'They asked what my week looked like before choosing a finish. Nobody does that.',
    name: 'Priya R.',
    meta: 'Classic manicure'
  }, {
    quote: 'Quiet room, warm tea, and nails that lasted through a holiday.',
    name: 'Jess M.',
    meta: 'Pedicure'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-2xl)',
      marginBottom: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Kind Words",
    level: "h2",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What Our", /*#__PURE__*/React.createElement("br", null), "Clients Say")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, ['chevron-left', 'chevron-right'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-on-dark)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    name: n,
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-2xl)'
    }
  }, quotes.map((q, i) => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: q.name
  }, q, {
    divider: i > 0
  })))));
}
function GiftCard() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "For Someone Else",
    level: "h2",
    title: "Gift Card",
    description: "A Nue Studio gift card is the perfect way to give someone a moment of beauty, relaxation and self-care."
  }), /*#__PURE__*/React.createElement(Button, null, "Buy A Gift Card")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 20,
    style: {
      position: 'absolute',
      left: -26,
      top: 40,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(Sparkle, {
    size: 13,
    style: {
      position: 'absolute',
      left: -6,
      top: 96,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    decor: true,
    shape: "large",
    ratio: "4 / 3",
    alt: "Gift card and manicured hands"
  }))));
}
function Faq() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "FAQ",
    level: "h2",
    title: "Have Questions?",
    description: "Everything guests usually ask before a first appointment."
  }), /*#__PURE__*/React.createElement(Accordion, {
    openIndex: 0,
    items: [{
      question: 'Do you take walk-ins?',
      answer: 'Where we can. Weekends fill early, so booking two weeks ahead is safer.'
    }, {
      question: 'How long does builder gel last?',
      answer: 'Three to four weeks, depending on nail growth and daily wear. We will tell you honestly what your nails can hold.'
    }, {
      question: 'Can I bring my own polish?',
      answer: 'Yes. Studio shades are already included in the price, but we are happy to use yours.'
    }, {
      question: 'Is there parking nearby?',
      answer: 'Two hours free on Calder Street, directly behind the studio.'
    }]
  })));
}
function Footer() {
  return /*#__PURE__*/React.createElement(SiteFooter, {
    note: "\xA9 2026 Nue Studio \xB7 14 Calder Street \xB7 Open Tuesday to Saturday",
    columns: [{
      title: 'Main',
      links: ['Home', 'Services', 'Journal']
    }, {
      title: 'Pages',
      links: ['Contact', 'Privacy Policy']
    }, {
      title: 'Social Media',
      links: ['Instagram']
    }]
  });
}
Object.assign(window, {
  Shell,
  Section,
  LineIcon,
  Promises,
  Testimonials,
  GiftCard,
  Faq,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ServiceCard,
  Button,
  Eyebrow
} = window.NueStudioDesignSystem_59fc92;
const SERVICES = [{
  title: 'Classic Manicure',
  duration: '55min',
  price: '£38',
  description: 'Shape, cuticle care, buff and a single coat of studio polish. The everyday appointment.'
}, {
  title: 'Builder / Hard Gel Manicure',
  duration: '1h 40min',
  price: '£68',
  description: 'A strengthening overlay shaped to your natural nail, finished in one of twelve studio shades.'
}, {
  title: 'Restorative Pedicure',
  duration: '1h 15min',
  price: '£62',
  description: 'Warm soak, exfoliation, nail and heel work, finished with a long massage.'
}, {
  title: 'Nail Art Session',
  duration: '45min add-on',
  price: 'from £18',
  description: 'Hand-painted detail booked alongside any manicure. Bring a reference or leave it to us.'
}];
function Services({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Treatments",
    level: "h1",
    title: "Our Services",
    description: "Four treatments, priced clearly. Every appointment opens with a short consultation.",
    style: {
      margin: '0 auto',
      alignItems: 'center'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5xl)'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    reverse: i % 2 === 1,
    shape: i % 2 === 1 ? 'large' : 'asymmetric'
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    level: "h2",
    title: "Not sure what to book?",
    description: "Tell us about your nails and we will suggest a treatment.",
    style: {
      alignItems: 'center'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('Contact')
  }, "Ask Us"))), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Faq, null));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
