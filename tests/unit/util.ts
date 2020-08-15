import { Wrapper, WrapperArray } from '@vue/test-utils'

// return values of all input and textarea fields as one string
export function getInputValues(wrapper: Wrapper<Vue>) {
    return  [
              ...wrapper.findAll('input').wrappers,
              ...wrapper.findAll('textarea').wrappers
            ]
            .map(e => (e.element as HTMLInputElement).value).join(" ");
  
}

export function withNameFilter(wrapperArray: WrapperArray<Vue>) {
  return {
    childSelectorHasText: (selector: string, str: string): WrapperArray<Vue> =>
      wrapperArray.filter((i) => i.find(selector).text().match(str)),

    hasText: (str: string): WrapperArray<Vue> =>
      wrapperArray.filter((i) => i.text().match(str)),
  }
}