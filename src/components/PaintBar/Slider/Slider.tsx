import React, { MutableRefObject, useCallback, useRef, useState } from "react";
import { useStateRef } from "src/hooks/ref";
import useGlobalEventListener from "src/hooks/use-global-event-listener";
import { StylableComponentProps } from "src/types";
import styled from "styled-components";

const sizes = {
  normal: {
    line: 4,
    handle: 20,
  },
};

const StyledSliderLine = styled.div`
  height: ${sizes.normal.line}px;
  margin: ${sizes.normal.handle / 2}px auto;
  width: calc(100% - ${sizes.normal.handle}px);
  border-radius: 20px;
  background-color: ${(props) => props.theme.neutral};
  position: relative;
`;

interface StyledSliderHandleProps {
  isDragging?: boolean;
  percentage: number;
}

const StyledSliderHandle = styled.div<StyledSliderHandleProps>`
  border-radius: 1000px;
  position: absolute;
  transform: translate(-10px, calc(-${sizes.normal.handle / 2}px + ${sizes.normal.line / 2}px));
  background-color: ${(props) => props.theme.neutralFocus};
  width: ${sizes.normal.handle}px;
  height: ${sizes.normal.handle}px;
  left: ${(props) => props.percentage}%;

  border: 2px solid ${(props) => props.theme.highlight};
  cursor: pointer;
`;

const calcSliderCenterX = (left: number) => {
  return left + sizes.normal.handle / 2;
};

const decimalToBoundedValue = (min: number, max: number, value: number) => {
  const diff = max - min;
  const newValue = value * diff + min;
  if (newValue < min) {
    return min;
  } else if (newValue > max) {
    return max;
  }
  return newValue;
};

interface SliderDragState {
  mouseBeginX: number;
  sliderBeginX: number;
}

interface SliderComponentProps extends StylableComponentProps {
  min: number;
  max: number;
  initialValue: number;
  onChange?: (value: number) => void;
}

const Slider = (props: SliderComponentProps) => {
  const { style, className, initialValue, onChange, min, max } = props;
  const [percentage, setPercentage] = useState(initialValue);
  // We use StateRefs so we can define the globalEventListeners only once
  const [isDragging, setIsDragging, isDraggingRef] = useStateRef(false);
  const [, setSliderDragState, sliderDragStateRef] = useStateRef<SliderDragState>({
    mouseBeginX: 0,
    sliderBeginX: 0,
  });
  const sliderHandleRef = useRef() as MutableRefObject<HTMLDivElement>;
  const sliderLineRef = useRef() as MutableRefObject<HTMLDivElement>;

  const setSliderPosition = (position: number) => {
    const sliderBeginX = sliderLineRef.current.getBoundingClientRect().left;
    const sliderWidth = sliderLineRef.current.getBoundingClientRect().width;
    const fraction = (position - sliderBeginX) / sliderWidth;
    const percentage = decimalToBoundedValue(0, 100, fraction);
    setPercentage(percentage);
    const value = decimalToBoundedValue(min, max, fraction);
    onChange && onChange(value);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setSliderDragState({
      mouseBeginX: e.pageX,
      sliderBeginX: calcSliderCenterX(e.currentTarget.getBoundingClientRect().left),
    });
  };

  const handleMouseUp = useCallback((e: MouseEvent) => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDraggingRef.current) {
      e.stopPropagation();
      const deltaFromBeginX = e.pageX - sliderDragStateRef.current.mouseBeginX;
      setSliderPosition(sliderDragStateRef.current.sliderBeginX + deltaFromBeginX);
    }
  }, []);

  useGlobalEventListener("mouseup", handleMouseUp);
  useGlobalEventListener("mousemove", handleMouseMove);

  return (
    <div {...{ style, className }}>
      <StyledSliderLine ref={sliderLineRef}>
        <StyledSliderHandle
          ref={sliderHandleRef}
          percentage={percentage}
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
        />
      </StyledSliderLine>
    </div>
  );
};

export default Slider;
