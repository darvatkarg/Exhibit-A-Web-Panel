import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { ReactEpubViewer } from "react-epub-viewer";
// containers
import Header from "containers/Header";
import Footer from "containers/Footer";
import Nav from "containers/menu/Nav";
import Spe from "containers/menu/Spe";
import Option from "containers/menu/Option";
import Learning from "containers/menu/Note";
import ContextMenu from "containers/commons/ContextMenu";
import Snackbar from "containers/commons/Snackbar";
// components
import ViewerWrapper from "components/commons/ViewerWrapper";
import LoadingView from "LoadingView";
// slices
import store from "slices";
import { updateBook, updateCurrentPage, updateToc } from "slices/book";
// hooks
import useMenu from "lib/hooks/useMenu";
import useHighlight from "lib/hooks/useHighlight";
// styles
import "lib/styles/readerStyle.css";
import viewerLayout from "lib/styles/viewerLayout";
// types
import { RootState } from "slices";
import { ViewerRef } from "types";
import Book, { BookStyle, BookOption } from "types/book";
import Page from "types/page";
import Toc from "types/toc";

const Reader = ({ url, loadingView, isSpeech }: Props) => {
  console.log("isSpeech", isSpeech);

  const dispatch = useDispatch();
  const currentLocation = useSelector<RootState, Page>(
    (state) => state.book.currentLocation
  );

  const viewerRef = useRef<ViewerRef | any>(null);
  const speRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const optionRef = useRef<HTMLDivElement | null>(null);
  const learningRef = useRef<HTMLDivElement | null>(null);

  const [isContextMenu, setIsContextMenu] = useState<boolean>(false);

  const [bookStyle, setBookStyle] = useState<BookStyle>({
    fontFamily: "Origin",
    fontSize: 18,
    lineHeight: 1.4,
    marginHorizontal: 15,
    marginVertical: 5,
  });

  const [bookOption, setBookOption] = useState<BookOption>({
    flow: "paginated",
    resizeOnOrientationChange: true,
    spread: "auto",
  });

  const [speechControl, onSpeech] = useState<boolean>(false);
  const [navControl, onNavToggle] = useMenu(navRef, 300);
  const [optionControl, onOptionToggle, emitEvent] = useMenu(optionRef, 300);
  const [learningControl, onLearningToggle] = useMenu(learningRef, 300);
  const {
    selection,
    onSelection,
    onClickHighlight,
    onAddHighlight,
    onRemoveHighlight,
    onUpdateHighlight,
  } = useHighlight(viewerRef, setIsContextMenu, bookStyle, bookOption.flow);

  /**
   * Change Epub book information
   * @param book Epub Book Info
   */
  const onBookInfoChange = (book: Book) => dispatch(updateBook(book));

  /**
   * Change Epub location
   * @param loc epubCFI or href
   */
  const onset = (onSpeech11: boolean) => {
    console.log(onSpeech11);
    onSpeech(!onSpeech11);
  };
  const onLocationChange = (loc: string) => {
    if (!viewerRef.current) return;
    viewerRef.current.setLocation(loc);
  };

  /**
   * Move page
   * @param type Direction
   */
  const onPageMove = (type: "PREV" | "NEXT") => {
    const node = viewerRef.current;
    if (!node || !node.prevPage || !node.nextPage) return;

    type === "PREV" && node.prevPage();
    type === "NEXT" && node.nextPage();
  };
  console.log(viewerRef, setIsContextMenu, bookStyle, bookOption.flow);
  /**
   * Set toc
   * @param toc Table of Epub contents
   */
  const onTocChange = (toc: Toc[]) => dispatch(updateToc(toc));

  /**
   * Set Epub viewer styles
   * @param bokkStyle_ viewer style
   */
  const onBookStyleChange = (bookStyle_: BookStyle) => setBookStyle(bookStyle_);

  /**
   * Set Epub viewer options
   * @param bookOption_ viewer option
   */
  const onBookOptionChange = (bookOption_: BookOption) =>
    setBookOption(bookOption_);

  /**
   * Change current page
   * @param page Epub page
   */
  const onPageChange = (page: Page) => dispatch(updateCurrentPage(page));

  /**
   * ContextMenu on
   * @param cfiRange CfiRange
   */
  const onContextMenu = (cfiRange: string) => {
    const result = onSelection(cfiRange);
    setIsContextMenu(result);
  };

  /** ContextMenu off */
  const onContextmMenuRemove = () => setIsContextMenu(false);
  console.log(isSpeech, "isSpeech");

  return (
    <>
      <ViewerWrapper>
        <Header
          onSend={viewerRef}
          onset={() => onset(speechControl)}
          onNavToggle={onNavToggle}
          onOptionToggle={onOptionToggle}
          onLearningToggle={onLearningToggle}
          isSpeech={isSpeech}
        />

        <ReactEpubViewer
          url={url}
          viewerLayout={viewerLayout}
          viewerStyle={bookStyle}
          viewerOption={bookOption}
          onBookInfoChange={onBookInfoChange}
          onPageChange={onPageChange}
          onTocChange={onTocChange}
          onSelection={onContextMenu}
          loadingView={loadingView || <LoadingView />}
          ref={viewerRef}
        />

        <Footer
          title={currentLocation.chapterName}
          nowPage={currentLocation.currentPage}
          totalPage={currentLocation.totalPage}
          onPageMove={onPageMove}
        />
      </ViewerWrapper>

      {isSpeech !== "Android" && (
        <Spe
          onSend={viewerRef}
          state={speechControl}
          onToggle={() => onset(speechControl)}
          title={currentLocation.chapterName}
          ref={speRef}
        />
      )}
      <Nav
        control={navControl}
        onToggle={onNavToggle}
        onLocation={onLocationChange}
        ref={navRef}
      />

      <Option
        control={optionControl}
        bookStyle={bookStyle}
        bookOption={bookOption}
        bookFlow={bookOption.flow}
        onToggle={onOptionToggle}
        emitEvent={emitEvent}
        onBookStyleChange={onBookStyleChange}
        onBookOptionChange={onBookOptionChange}
        ref={optionRef}
      />

      <Learning
        control={learningControl}
        onToggle={onLearningToggle}
        onClickHighlight={onClickHighlight}
        emitEvent={emitEvent}
        viewerRef={viewerRef}
        ref={learningRef}
      />

      <ContextMenu
        active={isContextMenu}
        viewerRef={viewerRef}
        selection={selection}
        onAddHighlight={onAddHighlight}
        onRemoveHighlight={onRemoveHighlight}
        onUpdateHighlight={onUpdateHighlight}
        onContextmMenuRemove={onContextmMenuRemove}
      />

      <Snackbar />
    </>
  );
};

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}
const ReaderWrapper = ({ url, loadingView }: Props) => {
  return (
    <Provider store={store}>
      <Reader url={url} loadingView={loadingView} isSpeech={getOS()} />
    </Provider>
  );
};

interface Props {
  url: string;
  loadingView?: React.ReactNode;
  isSpeech?: any;
}

export default ReaderWrapper;
