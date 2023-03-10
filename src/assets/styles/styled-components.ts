import styled from "styled-components";

// {===----===----===----===[ Container ]===----===----===----===}

export const Container = styled.div`
    width: 100%;
    min-widh: 100vw;
    height: 100%;
    min-height: 100vh;
`;

// {===----===----===----===[ Container ]===----===----===----===}

// {===----===----===----===[ Content ]===----===----===----===}

interface IContentProps { //TT = Title and Text
    width?: number;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
    flexDirection?: 'column' | 'row';
    padding?: number;
}

export const Content = styled.div<IContentProps>`
    display: flex;
    align-items: ${props => props.alignItems || 'initial'};
    justify-content: ${props => props.justifyContent || 'initial'};
    flex-direction: ${props => props.flexDirection || 'column'};
    width: ${props => props.width + '%' || 'auto'};
    height: 100%;
    min-height: 100vh;
    padding: ${props => props.padding ? props.padding + 'rem' : '2rem 4rem 2rem 4rem'};
    box-shadow: 2px 2px 6px 4px #00000022;
    transition: all 0.35s cubic-bezier(0, 0, 0.32, 1.22);

    @media (max-width: 665px) {
        padding: 2rem 3rem 2rem 3rem;
    }

    @media (max-width: 545px) {
        padding: 2rem 2rem 2rem 2rem;
    }

    @media (max-width: 365px) {
        padding: 2rem 1rem 2rem 1rem;
    }
`;
// {===----===----===----===[ Content ]===----===----===----===}

// {===----===----===----===[ Text ]===----===----===----===}

interface TTProps { //TT = Title and Text
    styleProps?: {
        color?: string;
        size?: number;
        opacity?: number;
        weight?: number;
        paddingLeft?: number;
        paddingTop?: number;
        paddingBottom?: number;
        backgroundColor?: string,
        fontSize?: 'small' | 'SM' | 'medium' | 'default' | 'big' | 'extra' | 'super',
        textAlign?: 'center' | 'end' | 'start' | 'justify' | 'left' | 'right',
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold',
        lineHeight?: number;
        width?: number;
    };
    tooltip?: ITooltipPropsNullable;
}

enum TitleFontSize {
    'small' = '1.5rem',
    'SM' = '1.75rem',
    'medium' = '2rem',
    'default' = '2.5rem',
    'big' = '3rem',
    'extra' = '4rem',
    'super' = '6rem',
}

export const Title = styled.h1<TTProps>`
    font-size: ${(props) => props.styleProps?.fontSize
        ? TitleFontSize[props.styleProps?.fontSize]
        : TitleFontSize.default
    };
    font-weight: ${props => props.styleProps?.weight ? props.styleProps?.weight : '700'};
    color: ${props => props.styleProps?.color || "#403b3b"};
    opacity: ${props => props.styleProps?.opacity || 1};
    text-align: ${(props) => props.styleProps?.textAlign || 'initial'};
    padding-top: ${props => props.styleProps?.paddingTop || 0}rem;
    padding-left: ${props => props.styleProps?.paddingLeft || 0}rem;
    padding-bottom: ${props => props.styleProps?.paddingBottom || 0}rem;
    font-weight: ${(props) => props.styleProps?.fontWeight ? props.styleProps?.fontWeight : 700};
    line-height: ${props => props.styleProps?.lineHeight || 120}px; 

    @media (max-width: 525px) {
        font-size: 1.65rem;
    }

    @media (max-width: 440px) {
        font-size: 1.5rem;
    }

    @media (max-width: 365px) {
        font-size: 1.425rem;
    }

    ${props => TooltipComponent(props?.tooltip)}
`;

enum PFontSize {
    'small' = '0.875rem',
    'SM' = '1rem',
    'medium' = '2rem',
    'default' = '1.125rem',
    'big' = '1.375rem',
    'extra' = '1.75rem',
    'super' = '2rem',
}

export const Text = styled.p<TTProps>`
    font-size: ${props => props.styleProps?.fontSize
        ? PFontSize[props.styleProps?.fontSize]
        : PFontSize.default
    };
    text-align: ${props => props.styleProps?.textAlign || 'initial'};
    font-weight: ${props => props.styleProps?.fontWeight || 400};
    color: ${props => props.color || "#403b3b"};
    padding-top: ${props => props.styleProps?.paddingTop || 0}rem;
    padding-left: ${props => props.styleProps?.paddingLeft || 0}rem;
    padding-bottom: ${props => props.styleProps?.paddingBottom || 0}rem;
    width: ${props => props.styleProps?.width + '%' || '30px'};

    ${props => TooltipComponent(props?.tooltip)}
`;

export const TagText = styled.p<TTProps>`
    width: ${props => props.styleProps?.width || 20}%;
    font-size: ${props => props.styleProps?.fontSize
        ? PFontSize[props.styleProps?.fontSize]
        : '0.750rem'
    };
    text-align: ${props => props.styleProps?.textAlign || 'center'};
    font-weight: ${props => props.styleProps?.fontWeight || 600};
    color: ${props => props.color || "#403b3b"};
    padding-top: ${props => props.styleProps?.paddingTop}rem;
    padding-left: ${props => props.styleProps?.paddingLeft || 0}rem;
    padding-bottom: ${props => props.styleProps?.paddingBottom}rem;
    padding: .15rem;
    text-transform: capitalize;
    border-radius: 40px;
    background-color: #001220;
    color: #fff;
    box-shadow: 2px 2px 6px 4px #c6236822;

    ${props => TooltipComponent(props?.tooltip)}
`;

export const SpanColorize = styled.span<TTProps>`
    color: ${props => props.color || "#7e6ae4"};
    ${props => TooltipComponent(props?.tooltip)}
`;

export const SpanBackground = styled.span<TTProps>`
    color: ${props => props.color || "#403b3b"};
    background: linear-gradient(180deg, transparent 55%, ${props => props.styleProps?.backgroundColor || "#7e6ae4"} 45%);
    ${props => TooltipComponent(props?.tooltip)}
`;

interface TSpanGradientProps { //TT = Title and Text
    color?: string;
    gradient: { position?: string, color1: string, color2: string },
    animate?: { infinite: boolean, }
}

export const SpanGradient = styled.span<TSpanGradientProps>`
    color: ${props => props.color || "#403b3b"};
    background: -webkit-linear-gradient(${props =>
        props.gradient.position
            ? props.gradient.position
            : '-45deg'
    },
    ${props => props.gradient.color1},
    ${props => props.gradient.color2});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

// {===----===----===----===[ Text ]===----===----===----===}

// {===----===----===----===[ PaddingTop ]===----===----===----===}

interface PaddingProps {
    size: number;
}

export const PaddingTop = styled.div<PaddingProps>`
    padding-top: ${props => props.size}rem;
`;

// {===----===----===----===[ PaddingTop ]===----===----===----===}

// {===----===----===----===[ Section ]===----===----===----===}

interface ISectionProps {
    alignItems?: 'center' | 'left' | 'right',
    justifyContent?: 'center' | 'left' | 'right',
}

export const Section = styled.section<ISectionProps> `
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || 'initial'};
    justify-content: ${props => props.justifyContent || 'initial'};
    width: 100%;
    height: 100%;
`;

// {===----===----===----===[ Section ]===----===----===----===}

// {===----===----===----===[ Div ]===----===----===----===}
interface IGenericDivProps {
    styleProps?: {
        marginTop?: number;
        marginBottom?: number;
        padding?: number;
        alignItems?: 'center' | 'flex-start' | 'flex-end';
        justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
        flexDirection?: 'column' | 'row';
        width?: number;
        height?: number;
        cursor?: 'pointer'
    }
}


export const GenericDiv = styled.div<IGenericDivProps>`
    display: flex;
    align-items: ${props => props.styleProps?.alignItems || 'initial'};
    justify-content: ${props => props.styleProps?.justifyContent || 'initial'};
    flex-direction: ${props => props.styleProps?.flexDirection || 'initial'};
    margin-top: ${props => props.styleProps?.marginTop || 0}rem;
    margin-bottom: ${props => props.styleProps?.marginBottom || 0}rem;
    width: ${props => props.styleProps?.width || 100}%;
    height: ${props => props.styleProps?.height || 100}%;
`;
// {===----===----===----===[ Div ]===----===----===----===}

// {===----===----===----===[ Div ]===----===----===----===}
interface IQuestionCardProps {
    marginTop?: number;
    marginBottom?: number;
    padding?: number;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    flexDirection?: 'column' | 'row';
    width?: number;
}


export const QuestionCard = styled.div<IQuestionCardProps>`
    display: flex;
    align-items: ${props => props.alignItems || 'initial'};
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 6px 4px #c6236835;
    padding: 1rem;
    cursor: pointer;

    h1{
        font-size: 24px;
    }

    img {
        width: 26px;
        height: 26px;
        object-fit: cover;
        filter: drop-shadow(2px 2px 2px 4px #0070f325);
    }
`;

export const QuestionCardList = styled.div<IQuestionCardProps>`
    display: flex;
    align-items: ${props => props.alignItems || 'initial'};
    flex-direction: column;
    width: 100%;
    height: 15rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 6px 4px #c6236835;
    margin-top: .5rem;
    margin-bottom: .5rem;
    padding: 1rem;
`;
// {===----===----===----===[ Div ]===----===----===----===}


// {===----===----===----===[ Image ]===----===----===----===}
interface IImageProps {
    marginTop?: number;
    marginBottom?: number;
    height?: number;
}

export const Image = styled.img<IImageProps>`
    text-align: center;
    width: 100%;
    height: ${props => `${props.height}rem` || '100%'};
    border-radius: 5px;
    object-fit: cover;
    box-shadow: 2px 2px 6px 4px #00000022;
`;
// {===----===----===----===[ Image ]===----===----===----===}

// {===----===----===----===[ Tooltip ]===----===----===----===}
interface ITooltipProps {
    tooltip: {
        position?: 'top' | 'bottom' | 'left' | 'right',
        top?: number,
        left?: number,
        text: string,
        width?: number,
        backgroundColor?: string;
        color?: string;
        removePositionRelative?: boolean;
    },
}

export const Tooltip = styled.div<ITooltipProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props => props.tooltip?.removePositionRelative
        ? ``
        : ` position: relative; top: 0; left: 0;`
    }

    &:after {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        ${props => props.tooltip?.position
        ? props.tooltip?.position === 'top'
            ? `bottom: 100%; left: 50%; margin-left: -95px;`
            : props.tooltip?.position === 'left'
                ? `top: -5px; right: 95%;`
                : props.tooltip?.position === 'right'
                    ? `top: -5px; left: 115%;`
                    : `top: 100%; left: 50%;`
        : `top: 100%; left: 50%; margin-left: -95px;`
    } 
        content: "${props => props.tooltip?.text}";
        background-color: ${props => props.tooltip?.backgroundColor || '#edc2d4'};
        width: ${props => props.tooltip?.width || 185}px;
        height: 2rem;
        color:${props => props.tooltip?.color || '#c62368'};
        border-radius: 10px;
        font-size: 0.75rem;
        opacity: 0;
        visibility: hidden;
        transform: scale(.9);
        transition-delay: .35s;
        transition: all 0.35s cubic-bezier(0, 0, 0.32, 1.22);
    }

    &:hover {
        &:after {
        ${props => props.tooltip?.position
        ? props.tooltip?.position === 'top'
            ? `bottom: 115%; left: 50%;`
            : props.tooltip?.position === 'left'
                ? `top: 10%; right: 105%;`
                : props.tooltip?.position === 'right'
                    ? `top: 10%; left: 105%;`
                    : `top: 115%; left: 50%;`
        : `top: 115%; left: 50%;`
    } 
            visibility: visible;
            opacity: 1;
            transform: scale(1);
        }
    }

    @media(max-width: 560px) {
        &:after {
            display: none
        }
    }
`;

interface ITooltipPropsNullable {
    position?: 'top' | 'bottom' | 'left' | 'right',
    top?: number,
    left?: number,
    text: string,
    width?: number,
    backgroundColor?: string;
    color?: string;
    removePositionRelative?: boolean;
}

const TooltipComponent = (props: any) => {
    return `
        ${props?.removePositionRelative
            ? ``
            : ` position: relative;`
        }

        &:after {
            display: ${props ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;
            position: absolute;
            ${props?.position
            ? props?.position === 'top'
                ? `top: 25%; left: 50%; margin-left: -95px;`
                : props?.position === 'left'
                    ? `top: -5px; left: -5%;`
                    : props?.position === 'right'
                        ? `top: -5px; left: 30%;`
                        : `top: -10%; left: 50%; margin-left: -95px;`
            : `top: 110%; left: 50%; margin-left: -95px;`
        } 
            content: "${props?.text}";
            background-color: ${props?.backgroundColor || '#edc2d4'};
            width: ${props?.width || 185}px;
            height: 2rem;
            color:${props?.color || '#c62368'};
            border-radius: 10px;
            font-size: 0.75rem;
            visibility: hidden;
            opacity: 0;
            transform: scale(.9);
            transition-delay: .35s;
            transition: all 0.35s cubic-bezier(0, 0, 0.32, 1.22);
        }

        &:hover {
            &:after {
            ${props?.position
            ? props?.position === 'top'
                ? `top: ${props?.top || -80}%; left: ${props?.left || 50}%;`
                : props?.position === 'left'
                    ? `top: ${props?.top || 10}%; left: ${props?.left || -60}%;`
                    : props?.position === 'right'
                        ? `top: ${props?.top || 10}%; left: ${props?.left || 105}%;`
                        : `top: ${props?.top || 115}%; left: ${props?.left || 50}%;`
            : `top: ${props?.top || 115}%; left: ${props?.left || 50}%;`
        }    
                visibility: visible;
                opacity: 1;
                transform: scale(1);
            }
        }

        @media(max-width: 560px) {
            &:after {
                display: none
            }
        }
        `;
}
// {===----===----===----===[ Tooltip ]===----===----===----===}

// {===----===----===----===[ Button ]===----===----===----===}
interface IButtonProps {
    tooltip?: ITooltipPropsNullable;
}

export const Button = styled.button<IButtonProps>`
    text-align: center;
    width: 20%;
    height: 3rem;
    border-radius: 40px;
    border: none;
    object-fit: cover;
    object-position: 0% 80%;
    box-shadow: 2px 2px 6px 4px #00000022;
    color: #fff;    
    font-weight: 900;
    font-size: .875rem; 
    background: linear-gradient(-45deg, #c62368,  #fa7268);
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0, 0, 0.32, 1.22);

    @media(max-width: 780px) {
        width: 50%;
    }

    @media(max-width: 320px) {
        width: 80%;
    }

    &:hover{
        background: linear-gradient(45deg, #fa7268,  #c62368);
        transform: scale(.95);
        box-shadow: 2px 2px 8px 6px #00000025;
    }

    ${props => TooltipComponent(props?.tooltip)}
`;
// {===----===----===----===[ Button ]===----===----===----===}


// {===----===----===----===[ FixButton ]===----===----===----===}
interface IFixedButtonProps {
    tooltip?: ITooltipPropsNullable;
}

export const FixedButton = styled.button<IFixedButtonProps>`
    position: fixed;
    top: 90%;
    left: 95%;
    text-align: center;
    width: 4rem;
    height: 4rem;
    border-radius: 40px;
    border: 2px solid #fff;
    object-fit: cover;
    object-position: 0% 80%;
    box-shadow: 2px 2px 6px 4px #00000022;
    color: #fff;    
    font-weight: 800;
    font-size: 1.5rem; 
    background-color: transparent;
    transition: 'all 0.35s cubic-bezier(0, 0, 0.32, 1.22)',
    cursor: pointer;

    @media(max-width: 1550px) {
        position: fixed;
        top: 90%;
        left: 93%;
    }

    @media(max-width: 1340px) {
        position: fixed;
        top: 90%;
        left: 91%;
    }


    @media(max-width: 830px) {
        position: fixed;
        top: 90%;
        left: 90%;
        background-color: #122038;
    }

    @media(max-width: 760px) {
        position: fixed;
        top: 90%;
        left: 87%;
    }

    @media(max-width: 575px) {
        position: fixed;
        top: 90%;
        left: 85%;
    }

    @media(max-width: 475px) {
        position: fixed;
        top: 90%;
        left: 82%;
    }

    @media(max-width: 405px) {
        position: fixed;
        top: 88%;
        left: 78%;
    }


    @media(max-width: 320px) {
        position: fixed;
        top: 88%;
        left: 74%;
    }

    ${props => TooltipComponent(props?.tooltip)}
`;
// {===----===----===----===[ FixButton ]===----===----===----===}

