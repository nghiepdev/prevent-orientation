class PreventOrientation {
  constructor({
    text = 'Sorry, this device orientation is not supported',
    color = 'rgb(90, 90, 90)',
    background = 'linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))',
    fontSize = '1.2rem',
  } = {}) {
    this.className = 'wrapper-prevent-orientation';
    this.text = text;
    this.color = color;
    this.background = background;
    this.fontSize = fontSize;
  }

  get angleCurrent() {
    try {
      return screen.orientation.angle;
    } catch (e) {
      return window.orientation;
    }
  }

  get supportsOrientationChange() {
    return 'onorientationchange' in window ? 'orientationchange' : 'resize';
  }

  forceOrientationToAngle = angle => {
    this.angle = angle;

    this.handlePrevent();

    window.addEventListener(this.supportsOrientationChange, this.handlePrevent);
  };

  forcePortrait = () => this.forceOrientationToAngle(0);

  forceLandscape = () => this.forceOrientationToAngle(90);

  handlePrevent = () => {
    const angleCurrent = this.angleCurrent;

    const container = document.createElement('div');
    const text = document.createElement('p');

    container.className = this.className;

    if (this.angle === angleCurrent) {
      try {
        Array.prototype.forEach.call(
          document.querySelectorAll('.' + this.className),
          node => {
            node.parentNode.removeChild(node);
          },
        );
      } catch (e) {}
    } else {
      Object.assign(container.style, {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 99999998,
        color: this.color,
        background: this.background,
      });

      Object.assign(text.style, {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: '50%',
        fontSize: this.fontSize,
        transform: 'translateY(-50%)',
        padding: '0 5px',
      });

      text.innerText = this.text;

      container.appendChild(text);

      document.body.appendChild(container);
    }
  };
}

export default PreventOrientation;
