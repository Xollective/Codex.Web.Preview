/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.6
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    var monaco_editor_ignored;

    Bridge.define("Codex.AdapterTypeAttribute", {
        inherits: [System.Attribute]
    });

    /** @namespace Codex */

    /**
     * Indicates an attached property which is not intrinsic to the parent object and should be
     excluded when computing the {@link }
     *
     * @public
     * @class Codex.AttachedAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.AttachedAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.CodeReviewerStatus", {
        $kind: "enum",
        statics: {
            fields: {
                NotStarted: 0,
                Waiting: 1,
                ApprovedWithSuggestions: 2,
                Approved: 3,
                Declined: 4
            }
        }
    });

    Bridge.define("Codex.CodeReviewStatus", {
        $kind: "enum"
    });

    Bridge.define("Codex.CoerceGetAttribute", {
        inherits: [System.Attribute],
        fields: {
            CoercedSourceType: null
        },
        ctors: {
            ctor: function (coercedSourceType) {
                if (coercedSourceType === void 0) { coercedSourceType = null; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.CoercedSourceType = coercedSourceType;
            }
        }
    });

    Bridge.define("Codex.CommentImportance", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Indicates that the author can decide to take the change or not
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 0
                 * @type Codex.CommentImportance
                 */
                AuthorDecides: 0,
                /**
                 * Default importance
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 1
                 * @type Codex.CommentImportance
                 */
                Info: 1,
                /**
                 * Reviewer would like further discussion on this comment
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 2
                 * @type Codex.CommentImportance
                 */
                Discuss: 2,
                /**
                 * Waiting on this comment to be addressed in order to approve
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 3
                 * @type Codex.CommentImportance
                 */
                Blocker: 3
            }
        }
    });

    Bridge.define("Codex.CommentStatus", {
        $kind: "enum",
        statics: {
            fields: {
                Unpublished: 0,
                Active: 1,
                Resolved: 2,
                WontFix: 3,
                Pending: 4,
                Closed: 5
            }
        }
    });

    Bridge.define("Codex.DataInclusionAttribute", {
        inherits: [System.Attribute],
        fields: {
            DataInclusion: 0
        },
        ctors: {
            ctor: function (dataInclusion) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.DataInclusion = dataInclusion;
            }
        }
    });

    Bridge.define("Codex.DataInclusionOptions", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Data should always be included
                 *
                 * @static
                 * @public
                 * @memberof Codex.DataInclusionOptions
                 * @constant
                 * @default 0
                 * @type Codex.DataInclusionOptions
                 */
                None: 0,
                Definitions: 1,
                References: 2,
                Classifications: 4,
                SearchDefinitions: 8,
                SearchReferences: 16,
                Content: 32,
                All: 63,
                Default: 62
            }
        }
    });

    Bridge.define("Codex.ISerializableEntity", {
        $kind: "interface"
    });

    Bridge.define("Codex.EntityIdAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.EntityUtilities", {
        statics: {
            methods: {
                NullOrCopy: function (T, TTarget, obj, copy) {
                    if (obj == null) {
                        return null;
                    }
                    return copy(obj);
                }
            }
        }
    });

    /**
     * Describes change kinds for files
     *
     * @public
     * @class Codex.FileChangeKind
     */
    Bridge.define("Codex.FileChangeKind", {
        $kind: "enum",
        statics: {
            fields: {
                Add: 0,
                Edit: 1,
                Rename: 2,
                Delete: 3
            }
        }
    });

    Bridge.define("Codex.Framework.Types.IStore", {
        $kind: "interface"
    });

    /** @namespace Codex.Framework.Types */

    /**
     * High level storage operations
     *
     * @abstract
     * @public
     * @class Codex.Framework.Types.IStore$1
     */
    Bridge.definei("Codex.Framework.Types.IStore$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.GeneratedClassNameAttribute", {
        inherits: [System.Attribute],
        fields: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Name = name;
            }
        }
    });

    Bridge.define("Codex.IRepoScopeEntity", {
        $kind: "interface"
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @abstract
     * @public
     * @class Codex.ISearchEntity
     */
    Bridge.define("Codex.ISearchEntity", {
        $kind: "interface"
    });

    /**
     * Describes a branch in a repository
     *
     * @abstract
     * @public
     * @class Codex.IBranch
     */
    Bridge.define("Codex.IBranch", {
        $kind: "interface"
    });

    Bridge.define("Codex.IClassificationList", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISpan", {
        $kind: "interface"
    });

    /**
     * Describes styling for a given classification
     *
     * @abstract
     * @public
     * @class Codex.IClassificationStyle
     */
    Bridge.define("Codex.IClassificationStyle", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReview", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewComment", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewCommentThread", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewerInfo", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewIteration", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeSymbol", {
        $kind: "interface"
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitFileLink", {
        $kind: "interface"
    });

    /**
     * Defines documentation about a symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationInfo
     */
    Bridge.define("Codex.IDocumentationInfo", {
        $kind: "interface"
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @abstract
     * @public
     * @class Codex.IEncodingDescription
     */
    Bridge.define("Codex.IEncodingDescription", {
        $kind: "interface"
    });

    Bridge.define("Codex.IFileStatistics", {
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageInfo", {
        $kind: "interface"
    });

    Bridge.definei("Codex.IMutable$2", function (TMutable, TImmutable) { return {
        $kind: "interface"
    }; });

    /**
     * Indicates stages for which the given property should be included
     *
     * @public
     * @class Codex.IncludeAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.IncludeAttribute", {
        inherits: [System.Attribute],
        fields: {
            AllowedStages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.AllowedStages = stages;
            }
        }
    });

    Bridge.define("Codex.IOutliningRegion", {
        $kind: "interface"
    });

    /**
     * Documentation for a method parameter
     *
     * @abstract
     * @public
     * @class Codex.IParameterDocumentation
     */
    Bridge.define("Codex.IParameterDocumentation", {
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertyMap", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferencedProject", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceList", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepository", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositoryReference", {
        $kind: "interface"
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @abstract
     * @public
     * @class Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.IRepositoryStoreInfo", {
        $kind: "interface"
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @abstract
     * @public
     * @class Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ISourceControlFileInfo", {
        $kind: "interface"
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @abstract
     * @public
     * @class Codex.ISourceFile
     */
    Bridge.define("Codex.ISourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.IStoredBoundSourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolLineSpanList", {
        $kind: "interface"
    });

    Bridge.define("Codex.MutableExtensions");

    Bridge.define("Codex.ObjectModel.CodexTypeUtilities", {
        statics: {
            fields: {
                s_typeMappings: null
            },
            ctors: {
                init: function () {
                    this.s_typeMappings = Codex.ObjectModel.CodexTypeUtilities.CreateTypeMapping();
                }
            },
            methods: {
                CreateTypeMapping: function () {
                    var typeMapping = new (System.Collections.Generic.Dictionary$2(Function,Function))();
                    typeMapping.add(Codex.ICommit, Codex.ObjectModel.Commit);
                    typeMapping.add(Codex.ObjectModel.Commit, Codex.ICommit);
                    typeMapping.add(Codex.ICommitChangedFile, Codex.ObjectModel.CommitChangedFile);
                    typeMapping.add(Codex.ObjectModel.CommitChangedFile, Codex.ICommitChangedFile);
                    typeMapping.add(Codex.ICommitFileLink, Codex.ObjectModel.CommitFileLink);
                    typeMapping.add(Codex.ObjectModel.CommitFileLink, Codex.ICommitFileLink);
                    typeMapping.add(Codex.IBranch, Codex.ObjectModel.Branch);
                    typeMapping.add(Codex.ObjectModel.Branch, Codex.IBranch);
                    typeMapping.add(Codex.IBoundSourceFile, Codex.ObjectModel.BoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.BoundSourceFile, Codex.IBoundSourceFile);
                    typeMapping.add(Codex.IBoundSourceInfo, Codex.ObjectModel.BoundSourceInfo);
                    typeMapping.add(Codex.ObjectModel.BoundSourceInfo, Codex.IBoundSourceInfo);
                    typeMapping.add(Codex.ISourceControlFileInfo, Codex.ObjectModel.SourceControlFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceControlFileInfo, Codex.ISourceControlFileInfo);
                    typeMapping.add(Codex.ISourceFileInfo, Codex.ObjectModel.SourceFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceFileInfo, Codex.ISourceFileInfo);
                    typeMapping.add(Codex.IEncodingDescription, Codex.ObjectModel.EncodingDescription);
                    typeMapping.add(Codex.ObjectModel.EncodingDescription, Codex.IEncodingDescription);
                    typeMapping.add(Codex.ISourceFile, Codex.ObjectModel.SourceFile);
                    typeMapping.add(Codex.ObjectModel.SourceFile, Codex.ISourceFile);
                    typeMapping.add(Codex.IOutliningRegion, Codex.ObjectModel.OutliningRegion);
                    typeMapping.add(Codex.ObjectModel.OutliningRegion, Codex.IOutliningRegion);
                    typeMapping.add(Codex.IDefinitionSpan, Codex.ObjectModel.DefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.DefinitionSpan, Codex.IDefinitionSpan);
                    typeMapping.add(Codex.IParameterDefinitionSpan, Codex.ObjectModel.ParameterDefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterDefinitionSpan, Codex.IParameterDefinitionSpan);
                    typeMapping.add(Codex.IReferenceSpan, Codex.ObjectModel.ReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ReferenceSpan, Codex.IReferenceSpan);
                    typeMapping.add(Codex.IParameterReferenceSpan, Codex.ObjectModel.ParameterReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterReferenceSpan, Codex.IParameterReferenceSpan);
                    typeMapping.add(Codex.IClassificationSpan, Codex.ObjectModel.ClassificationSpan);
                    typeMapping.add(Codex.ObjectModel.ClassificationSpan, Codex.IClassificationSpan);
                    typeMapping.add(Codex.ISymbolSpan, Codex.ObjectModel.SymbolSpan);
                    typeMapping.add(Codex.ObjectModel.SymbolSpan, Codex.ISymbolSpan);
                    typeMapping.add(Codex.ITextLineSpan, Codex.ObjectModel.TextLineSpan);
                    typeMapping.add(Codex.ObjectModel.TextLineSpan, Codex.ITextLineSpan);
                    typeMapping.add(Codex.ILineSpan, Codex.ObjectModel.LineSpan);
                    typeMapping.add(Codex.ObjectModel.LineSpan, Codex.ILineSpan);
                    typeMapping.add(Codex.ISpan, Codex.ObjectModel.Span);
                    typeMapping.add(Codex.ObjectModel.Span, Codex.ISpan);
                    typeMapping.add(Codex.ICodeReview, Codex.ObjectModel.CodeReview);
                    typeMapping.add(Codex.ObjectModel.CodeReview, Codex.ICodeReview);
                    typeMapping.add(Codex.ICodeReviewIteration, Codex.ObjectModel.CodeReviewIteration);
                    typeMapping.add(Codex.ObjectModel.CodeReviewIteration, Codex.ICodeReviewIteration);
                    typeMapping.add(Codex.ICodeReviewerInfo, Codex.ObjectModel.CodeReviewerInfo);
                    typeMapping.add(Codex.ObjectModel.CodeReviewerInfo, Codex.ICodeReviewerInfo);
                    typeMapping.add(Codex.ICodeReviewFile, Codex.ObjectModel.CodeReviewFile);
                    typeMapping.add(Codex.ObjectModel.CodeReviewFile, Codex.ICodeReviewFile);
                    typeMapping.add(Codex.ICodeReviewCommentThread, Codex.ObjectModel.CodeReviewCommentThread);
                    typeMapping.add(Codex.ObjectModel.CodeReviewCommentThread, Codex.ICodeReviewCommentThread);
                    typeMapping.add(Codex.ICodeReviewComment, Codex.ObjectModel.CodeReviewComment);
                    typeMapping.add(Codex.ObjectModel.CodeReviewComment, Codex.ICodeReviewComment);
                    typeMapping.add(Codex.ILanguageInfo, Codex.ObjectModel.LanguageInfo);
                    typeMapping.add(Codex.ObjectModel.LanguageInfo, Codex.ILanguageInfo);
                    typeMapping.add(Codex.IClassificationStyle, Codex.ObjectModel.ClassificationStyle);
                    typeMapping.add(Codex.ObjectModel.ClassificationStyle, Codex.IClassificationStyle);
                    typeMapping.add(Codex.IProject, Codex.ObjectModel.AnalyzedProject);
                    typeMapping.add(Codex.ObjectModel.AnalyzedProject, Codex.IProject);
                    typeMapping.add(Codex.IReferencedProject, Codex.ObjectModel.ReferencedProject);
                    typeMapping.add(Codex.ObjectModel.ReferencedProject, Codex.IReferencedProject);
                    typeMapping.add(Codex.IProjectFileLink, Codex.ObjectModel.ProjectFileLink);
                    typeMapping.add(Codex.ObjectModel.ProjectFileLink, Codex.IProjectFileLink);
                    typeMapping.add(Codex.IDocumentationInfo, Codex.ObjectModel.DocumentationInfo);
                    typeMapping.add(Codex.ObjectModel.DocumentationInfo, Codex.IDocumentationInfo);
                    typeMapping.add(Codex.IParameterDocumentation, Codex.ObjectModel.ParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.ParameterDocumentation, Codex.IParameterDocumentation);
                    typeMapping.add(Codex.ITypedParameterDocumentation, Codex.ObjectModel.TypedParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.TypedParameterDocumentation, Codex.ITypedParameterDocumentation);
                    typeMapping.add(Codex.IDocumentationReferenceSymbol, Codex.ObjectModel.DocumentationReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.DocumentationReferenceSymbol, Codex.IDocumentationReferenceSymbol);
                    typeMapping.add(Codex.IPropertySearchModel, Codex.ObjectModel.PropertySearchModel);
                    typeMapping.add(Codex.ObjectModel.PropertySearchModel, Codex.IPropertySearchModel);
                    typeMapping.add(Codex.IPropertyMap, Codex.ObjectModel.PropertyMap);
                    typeMapping.add(Codex.ObjectModel.PropertyMap, Codex.IPropertyMap);
                    typeMapping.add(Codex.IRepository, Codex.ObjectModel.Repository);
                    typeMapping.add(Codex.ObjectModel.Repository, Codex.IRepository);
                    typeMapping.add(Codex.IRepositoryReference, Codex.ObjectModel.RepositoryReference);
                    typeMapping.add(Codex.ObjectModel.RepositoryReference, Codex.IRepositoryReference);
                    typeMapping.add(Codex.ISearchEntity, Codex.ObjectModel.SearchEntity);
                    typeMapping.add(Codex.ObjectModel.SearchEntity, Codex.ISearchEntity);
                    typeMapping.add(Codex.IRepoScopeEntity, Codex.ObjectModel.RepoScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoScopeEntity, Codex.IRepoScopeEntity);
                    typeMapping.add(Codex.ICommitScopeEntity, Codex.ObjectModel.CommitScopeEntity);
                    typeMapping.add(Codex.ObjectModel.CommitScopeEntity, Codex.ICommitScopeEntity);
                    typeMapping.add(Codex.IProjectScopeEntity, Codex.ObjectModel.ProjectScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectScopeEntity, Codex.IProjectScopeEntity);
                    typeMapping.add(Codex.IRepoFileScopeEntity, Codex.ObjectModel.RepoFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoFileScopeEntity, Codex.IRepoFileScopeEntity);
                    typeMapping.add(Codex.IProjectFileScopeEntity, Codex.ObjectModel.ProjectFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectFileScopeEntity, Codex.IProjectFileScopeEntity);
                    typeMapping.add(Codex.IRegisteredEntity, Codex.ObjectModel.RegisteredEntity);
                    typeMapping.add(Codex.ObjectModel.RegisteredEntity, Codex.IRegisteredEntity);
                    typeMapping.add(Codex.IStoredFilter, Codex.ObjectModel.StoredFilter);
                    typeMapping.add(Codex.ObjectModel.StoredFilter, Codex.IStoredFilter);
                    typeMapping.add(Codex.IDefinitionSearchModel, Codex.ObjectModel.DefinitionSearchModel);
                    typeMapping.add(Codex.ObjectModel.DefinitionSearchModel, Codex.IDefinitionSearchModel);
                    typeMapping.add(Codex.ILanguageSearchModel, Codex.ObjectModel.LanguageSearchModel);
                    typeMapping.add(Codex.ObjectModel.LanguageSearchModel, Codex.ILanguageSearchModel);
                    typeMapping.add(Codex.IReferenceSearchModel, Codex.ObjectModel.ReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchModel, Codex.IReferenceSearchModel);
                    typeMapping.add(Codex.ISourceSearchModelBase, Codex.ObjectModel.SourceSearchModelBase);
                    typeMapping.add(Codex.ObjectModel.SourceSearchModelBase, Codex.ISourceSearchModelBase);
                    typeMapping.add(Codex.IBoundSourceSearchModel, Codex.ObjectModel.BoundSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.BoundSourceSearchModel, Codex.IBoundSourceSearchModel);
                    typeMapping.add(Codex.ITextSourceSearchModel, Codex.ObjectModel.TextSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.TextSourceSearchModel, Codex.ITextSourceSearchModel);
                    typeMapping.add(Codex.IRepositorySearchModel, Codex.ObjectModel.RepositorySearchModel);
                    typeMapping.add(Codex.ObjectModel.RepositorySearchModel, Codex.IRepositorySearchModel);
                    typeMapping.add(Codex.IProjectSearchModel, Codex.ObjectModel.ProjectSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectSearchModel, Codex.IProjectSearchModel);
                    typeMapping.add(Codex.IProjectReferenceSearchModel, Codex.ObjectModel.ProjectReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectReferenceSearchModel, Codex.IProjectReferenceSearchModel);
                    typeMapping.add(Codex.ICommitSearchModel, Codex.ObjectModel.CommitSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitSearchModel, Codex.ICommitSearchModel);
                    typeMapping.add(Codex.ICommitFilesSearchModel, Codex.ObjectModel.CommitFilesSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitFilesSearchModel, Codex.ICommitFilesSearchModel);
                    typeMapping.add(Codex.IFileStatistics, Codex.ObjectModel.FileStatistics);
                    typeMapping.add(Codex.ObjectModel.FileStatistics, Codex.IFileStatistics);
                    typeMapping.add(Codex.IRepositoryStoreInfo, Codex.ObjectModel.RepositoryStoreInfo);
                    typeMapping.add(Codex.ObjectModel.RepositoryStoreInfo, Codex.IRepositoryStoreInfo);
                    typeMapping.add(Codex.ICommitFilesDirectory, Codex.ObjectModel.CommitFilesDirectory);
                    typeMapping.add(Codex.ObjectModel.CommitFilesDirectory, Codex.ICommitFilesDirectory);
                    typeMapping.add(Codex.IStoredBoundSourceFile, Codex.ObjectModel.StoredBoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.StoredBoundSourceFile, Codex.IStoredBoundSourceFile);
                    typeMapping.add(Codex.IDefinitionSymbol, Codex.ObjectModel.DefinitionSymbol);
                    typeMapping.add(Codex.ObjectModel.DefinitionSymbol, Codex.IDefinitionSymbol);
                    typeMapping.add(Codex.IReferenceSymbol, Codex.ObjectModel.ReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.ReferenceSymbol, Codex.IReferenceSymbol);
                    typeMapping.add(Codex.ICodeSymbol, Codex.ObjectModel.Symbol);
                    typeMapping.add(Codex.ObjectModel.Symbol, Codex.ICodeSymbol);
                    typeMapping.add(Codex.Sdk.Search.IReferenceSearchResult, Codex.ObjectModel.ReferenceSearchResult);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchResult, Codex.Sdk.Search.IReferenceSearchResult);
                    typeMapping.add(Codex.Sdk.Search.ITextLineSpanResult, Codex.ObjectModel.TextLineSpanResult);
                    typeMapping.add(Codex.ObjectModel.TextLineSpanResult, Codex.Sdk.Search.ITextLineSpanResult);
                    typeMapping.add(Codex.Sdk.Search.ISearchResult, Codex.ObjectModel.SearchResult);
                    typeMapping.add(Codex.ObjectModel.SearchResult, Codex.Sdk.Search.ISearchResult);
                    typeMapping.add(Codex.Sdk.Search.IIndex, Codex.ObjectModel.Index);
                    typeMapping.add(Codex.ObjectModel.Index, Codex.Sdk.Search.IIndex);
                    return typeMapping;
                }
            }
        }
    });

    /** @namespace Codex.ObjectModel */

    /**
     * Allows defining extension data during analysis
     *
     * @public
     * @class Codex.ObjectModel.ExtensionData
     */
    Bridge.define("Codex.ObjectModel.ExtensionData");

    /**
     * Defines Codex glyphs
     *
     * @public
     * @class Codex.ObjectModel.Glyph
     */
    Bridge.define("Codex.ObjectModel.Glyph", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: -1,
                Assembly: 0,
                BasicFile: 1,
                BasicProject: 2,
                ClassPublic: 3,
                ClassProtected: 4,
                ClassPrivate: 5,
                ClassInternal: 6,
                CSharpFile: 7,
                CSharpProject: 8,
                ConstantPublic: 9,
                ConstantProtected: 10,
                ConstantPrivate: 11,
                ConstantInternal: 12,
                DelegatePublic: 13,
                DelegateProtected: 14,
                DelegatePrivate: 15,
                DelegateInternal: 16,
                EnumPublic: 17,
                EnumProtected: 18,
                EnumPrivate: 19,
                EnumInternal: 20,
                EnumMember: 21,
                Error: 22,
                EventPublic: 23,
                EventProtected: 24,
                EventPrivate: 25,
                EventInternal: 26,
                ExtensionMethodPublic: 27,
                ExtensionMethodProtected: 28,
                ExtensionMethodPrivate: 29,
                ExtensionMethodInternal: 30,
                FieldPublic: 31,
                FieldProtected: 32,
                FieldPrivate: 33,
                FieldInternal: 34,
                InterfacePublic: 35,
                InterfaceProtected: 36,
                InterfacePrivate: 37,
                InterfaceInternal: 38,
                Intrinsic: 39,
                Keyword: 40,
                Label: 41,
                Local: 42,
                Namespace: 43,
                MethodPublic: 44,
                MethodProtected: 45,
                MethodPrivate: 46,
                MethodInternal: 47,
                ModulePublic: 48,
                ModuleProtected: 49,
                ModulePrivate: 50,
                ModuleInternal: 51,
                OpenFolder: 52,
                Operator: 53,
                Parameter: 54,
                PropertyPublic: 55,
                PropertyProtected: 56,
                PropertyPrivate: 57,
                PropertyInternal: 58,
                RangeVariable: 59,
                Reference: 60,
                StructurePublic: 61,
                StructureProtected: 62,
                StructurePrivate: 63,
                StructureInternal: 64,
                TypeParameter: 65,
                Up: 66,
                Down: 67,
                Left: 68,
                Right: 69,
                Dot: 70,
                Snippet: 71
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities", {
        statics: {
            methods: {
                GetGlyphNumber: function (glyph) {
                    var result = (((((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphGroup(glyph)) & 65535) + ((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphItem(glyph)) & 65535)) | 0)) & 65535;
                    return result;
                },
                GetStandardGlyphGroup: function (glyph) {
                    switch (glyph) {
                        case Codex.ObjectModel.Glyph.Assembly: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphAssembly;
                        case Codex.ObjectModel.Glyph.ClassPublic: 
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupClass;
                        case Codex.ObjectModel.Glyph.ConstantPublic: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupConstant;
                        case Codex.ObjectModel.Glyph.CSharpFile: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphCSharpFile;
                        case Codex.ObjectModel.Glyph.DelegatePublic: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupDelegate;
                        case Codex.ObjectModel.Glyph.EnumPublic: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnum;
                        case Codex.ObjectModel.Glyph.EnumMember: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnumMember;
                        case Codex.ObjectModel.Glyph.Error: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupError;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPublic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethod;
                        case Codex.ObjectModel.Glyph.ExtensionMethodProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodProtected;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodPrivate;
                        case Codex.ObjectModel.Glyph.ExtensionMethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodInternal;
                        case Codex.ObjectModel.Glyph.EventPublic: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEvent;
                        case Codex.ObjectModel.Glyph.FieldPublic: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupField;
                        case Codex.ObjectModel.Glyph.InterfacePublic: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupInterface;
                        case Codex.ObjectModel.Glyph.Intrinsic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Keyword: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphKeyword;
                        case Codex.ObjectModel.Glyph.Label: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Local: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Namespace: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupNamespace;
                        case Codex.ObjectModel.Glyph.MethodPublic: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupMethod;
                        case Codex.ObjectModel.Glyph.ModulePublic: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupModule;
                        case Codex.ObjectModel.Glyph.OpenFolder: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphOpenFolder;
                        case Codex.ObjectModel.Glyph.Operator: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupOperator;
                        case Codex.ObjectModel.Glyph.Parameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.PropertyPublic: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupProperty;
                        case Codex.ObjectModel.Glyph.RangeVariable: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Reference: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphReference;
                        case Codex.ObjectModel.Glyph.StructurePublic: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupStruct;
                        case Codex.ObjectModel.Glyph.TypeParameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupType;
                        case Codex.ObjectModel.Glyph.Up: 
                        case Codex.ObjectModel.Glyph.Down: 
                        case Codex.ObjectModel.Glyph.Left: 
                        case Codex.ObjectModel.Glyph.Right: 
                        case Codex.ObjectModel.Glyph.Dot: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphArrow;
                        default: 
                            throw new System.ArgumentException("glyph");
                    }
                },
                GetStandardGlyphItem: function (icon) {
                    switch (icon) {
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemProtected;
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPrivate;
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemFriend;
                        default: 
                            // We don't want any overlays
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPublic;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphGroupClass: 0,
                GlyphGroupConstant: 6,
                GlyphGroupDelegate: 12,
                GlyphGroupEnum: 18,
                GlyphGroupEnumMember: 24,
                GlyphGroupEvent: 30,
                GlyphGroupException: 36,
                GlyphGroupField: 42,
                GlyphGroupInterface: 48,
                GlyphGroupMacro: 54,
                GlyphGroupMap: 60,
                GlyphGroupMapItem: 66,
                GlyphGroupMethod: 72,
                GlyphGroupOverload: 78,
                GlyphGroupModule: 84,
                GlyphGroupNamespace: 90,
                GlyphGroupOperator: 96,
                GlyphGroupProperty: 102,
                GlyphGroupStruct: 108,
                GlyphGroupTemplate: 114,
                GlyphGroupTypedef: 120,
                GlyphGroupType: 126,
                GlyphGroupUnion: 132,
                GlyphGroupVariable: 138,
                GlyphGroupValueType: 144,
                GlyphGroupIntrinsic: 150,
                GlyphGroupJSharpMethod: 156,
                GlyphGroupJSharpField: 162,
                GlyphGroupJSharpClass: 168,
                GlyphGroupJSharpNamespace: 174,
                GlyphGroupJSharpInterface: 180,
                GlyphGroupError: 186,
                GlyphBscFile: 191,
                GlyphAssembly: 192,
                GlyphLibrary: 193,
                GlyphVBProject: 194,
                GlyphCoolProject: 196,
                GlyphCppProject: 199,
                GlyphDialogId: 200,
                GlyphOpenFolder: 201,
                GlyphClosedFolder: 202,
                GlyphArrow: 203,
                GlyphCSharpFile: 204,
                GlyphCSharpExpansion: 205,
                GlyphKeyword: 206,
                GlyphInformation: 207,
                GlyphReference: 208,
                GlyphRecursion: 209,
                GlyphXmlItem: 210,
                GlyphJSharpProject: 211,
                GlyphJSharpDocument: 212,
                GlyphForwardType: 213,
                GlyphCallersGraph: 214,
                GlyphCallGraph: 215,
                GlyphWarning: 216,
                GlyphMaybeReference: 217,
                GlyphMaybeCaller: 218,
                GlyphMaybeCall: 219,
                GlyphExtensionMethod: 220,
                GlyphExtensionMethodInternal: 221,
                GlyphExtensionMethodFriend: 222,
                GlyphExtensionMethodProtected: 223,
                GlyphExtensionMethodPrivate: 224,
                GlyphExtensionMethodShortcut: 225,
                GlyphXmlAttribute: 226,
                GlyphXmlChild: 227,
                GlyphXmlDescendant: 228,
                GlyphXmlNamespace: 229,
                GlyphXmlAttributeQuestion: 230,
                GlyphXmlAttributeCheck: 231,
                GlyphXmlChildQuestion: 232,
                GlyphXmlChildCheck: 233,
                GlyphXmlDescendantQuestion: 234,
                GlyphXmlDescendantCheck: 235,
                GlyphCompletionWarning: 236,
                GlyphGroupUnknown: 237
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphItem", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphItemPublic: 0,
                GlyphItemInternal: 1,
                GlyphItemFriend: 2,
                GlyphItemProtected: 3,
                GlyphItemPrivate: 4,
                GlyphItemShortcut: 5,
                TotalGlyphItems: 6
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IIndex", {
        $kind: "interface"
    });

    /**
     * Defines standard set of project kinds
     *
     * @public
     * @class Codex.ObjectModel.ProjectKind
     */
    Bridge.define("Codex.ObjectModel.ProjectKind", {
        $kind: "enum",
        statics: {
            fields: {
                Source: 0,
                MetadataAsSource: 1,
                Decompilation: 2
            }
        }
    });

    /**
     * Defines standard set of reference kinds
     *
     * @public
     * @class Codex.ObjectModel.ReferenceKind
     */
    Bridge.define("Codex.ObjectModel.ReferenceKind", {
        $kind: "enum",
        statics: {
            fields: {
                Definition: 0,
                /**
                 * This represents a constructor declaration for the given type. This is different than
                 instantiation which actually represents a call to the constructor
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 1
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Constructor: 1,
                /**
                 * A call to the constructor of the type referenced by the symbol. This is different than
                 constructor which is the actual declaration for a constructor for the type symbol.
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 2
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Instantiation: 2,
                DerivedType: 3,
                InterfaceInheritance: 4,
                InterfaceImplementation: 5,
                Override: 6,
                InterfaceMemberImplementation: 7,
                Write: 8,
                Read: 9,
                GuidUsage: 10,
                UsingDispose: 11,
                /**
                 * The symbol is the return type of a method or property getter
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 12
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                ReturnType: 12,
                EmptyArrayAllocation: 13,
                MSBuildPropertyAssignment: 14,
                MSBuildPropertyUsage: 15,
                MSBuildItemAssignment: 16,
                MSBuildItemUsage: 17,
                MSBuildTargetDeclaration: 18,
                MSBuildTargetUsage: 19,
                MSBuildTaskDeclaration: 20,
                MSBuildTaskUsage: 21,
                Text: 22,
                ProjectLevelReference: 23,
                /**
                 * Catch-all reference comes after more specific reference kinds
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 24
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Reference: 24
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ISearchResult", {
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.SymbolId", {
        inherits: function () { return [System.IEquatable$1(Codex.ObjectModel.SymbolId)]; },
        $kind: "struct",
        statics: {
            methods: {
                UnsafeCreateWithValue: function (value) {
                    return new Codex.ObjectModel.SymbolId.$ctor2(value, true);
                },
                getDefaultValue: function () { return new Codex.ObjectModel.SymbolId(); }
            }
        },
        fields: {
            Value: null
        },
        alias: ["equalsT", "System$IEquatable$1$Codex$ObjectModel$SymbolId$equalsT"],
        ctors: {
            $ctor1: function (value) {
                this.$initialize();
                this.Value = value;
            },
            $ctor2: function (value, ignored) {
                this.$initialize();
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equalsT: function (other) {
                return Bridge.referenceEquals(this.Value, other.Value);
            },
            toString: function () {
                return this.Value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([3333875138, this.Value]);
                return h;
            },
            $clone: function (to) {
                var s = to || new Codex.ObjectModel.SymbolId();
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("Codex.ObjectStage", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Analysis: 1,
                Index: 2,
                Search: 4,
                All: 7
            }
        }
    });

    Bridge.define("Codex.PlaceholderAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.QueryAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.ReadOnlyListAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.RequiredForAttribute", {
        inherits: [System.Attribute],
        fields: {
            Stages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Stages = stages;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexFilter$1", function (T) { return {
        statics: {
            methods: {
                op_BitwiseAnd: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.And, left, right);
                },
                op_BitwiseOr: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.Or, left, right);
                }
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.BinaryOperator", {
        $kind: "enum",
        statics: {
            fields: {
                And: 0,
                Or: 1
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexArgumentsBase", {
        props: {
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.CodexArgumentsBase
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        },
        ctors: {
            init: function () {
                this.MaxResults = 100;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexServiceMethod", {
        $kind: "enum",
        statics: {
            fields: {
                Search: 0,
                FindAllRefs: 1,
                FindDef: 2,
                FindDefLocation: 3,
                GetSource: 4
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.TermIndexProperty$1", function (T) { return {

    }; });

    /** @namespace Codex.Sdk.Search */

    /**
     * High level operations for codex
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.ICodex
     */
    Bridge.define("Codex.Sdk.Search.ICodex", {
        $kind: "interface"
    });

    Bridge.definei("Codex.Sdk.Search.IIndexQuery$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.definei("Codex.Sdk.Search.IIndexQueryFilter$1", function (T) { return {
        $kind: "interface"
    }; });

    /**
     * High level query operations for indexed code
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.Index$1
     */
    Bridge.define("Codex.Sdk.Search.Index$1", function (T) { return {

    }; });

    Bridge.define("Codex.Sdk.Search.IndexQuery$1", function (T) { return {
        props: {
            Filter: null,
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQuery$1
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryHits$1", function (T) { return {
        props: {
            /**
             * The total number of results matching the query. 
             NOTE: This may be greater than the number of hits returned.
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Total
             * @type number
             */
            Total: System.Int64(0),
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Hits
             * @type System.Collections.Generic.List$1
             */
            Hits: null
        },
        methods: {
            toString: function () {
                return System.String.format("Total: {0}, {1}", this.Total, System.Object.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse", {
        props: {
            /**
             * If the query failed, this will contain the error message
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Error
             * @type string
             */
            Error: null,
            /**
             * The raw query sent to the index server
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function RawQueries
             * @type System.Collections.Generic.List$1
             */
            RawQueries: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Duration
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            Duration: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function ServerTime
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            ServerTime: null
        },
        ctors: {
            init: function () {
                this.Duration = new Codex.Sdk.Search.SerializableTimeSpan();
                this.ServerTime = new Codex.Sdk.Search.SerializableTimeSpan();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("Error: {0}, Duration: {1}", this.Error, this.Duration.$clone());
            }
        }
    });

    Bridge.definei("Codex.Sdk.Search.ITermProperty$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.SerializableTimeSpan", {
        $kind: "struct",
        statics: {
            methods: {
                op_Implicit$1: function (value) {
                    return value.AsTimeSpan();
                },
                op_Implicit: function (value) {
                    return new Codex.Sdk.Search.SerializableTimeSpan.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.Sdk.Search.SerializableTimeSpan(); }
            }
        },
        props: {
            Ticks: System.Int64(0)
        },
        ctors: {
            $ctor1: function (timespan) {
                this.$initialize();
                this.Ticks = timespan.getTicks();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            AsTimeSpan: function () {
                return System.TimeSpan.fromTicks(this.Ticks);
            },
            toString: function () {
                return this.AsTimeSpan().toString();
            },
            getHashCode: function () {
                var h = Bridge.addHash([9077984700, this.Ticks]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Codex.Sdk.Search.SerializableTimeSpan)) {
                    return false;
                }
                return Bridge.equals(this.Ticks, o.Ticks);
            },
            $clone: function (to) {
                var s = to || new Codex.Sdk.Search.SerializableTimeSpan();
                s.Ticks = this.Ticks;
                return s;
            }
        }
    });

    Bridge.define("Codex.SearchBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Term: 1,
                NormalizedKeyword: 2,
                Sortword: 3,
                HierarchicalPath: 4,
                FullText: 5,
                Prefix: 6,
                PrefixFullName: 7
            }
        }
    });

    Bridge.define("Codex.SearchBehaviorAttribute", {
        inherits: [System.Attribute],
        fields: {
            Behavior: 0
        },
        ctors: {
            ctor: function (behavior) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Behavior = behavior;
            }
        }
    });

    Bridge.define("Codex.SearchDescriptorInlineAttribute", {
        inherits: [System.Attribute],
        fields: {
            Inline: false
        },
        ctors: {
            ctor: function (inline) {
                if (inline === void 0) { inline = false; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Inline = inline;
            }
        }
    });

    Bridge.define("Codex.SearchType", {
        statics: {
            methods: {
                Create: function (T, registeredSearchTypes, name) {
                    if (name === void 0) { name = null; }
                    var searchType = new (Codex.SearchType$1(T))(name);
                    searchType.Id = registeredSearchTypes.Count;
                    registeredSearchTypes.add(searchType);
                    return searchType;
                }
            }
        },
        props: {
            Name: null,
            IndexName: null,
            Id: 0
        }
    });

    Bridge.define("Codex.SearchTypes", {
        statics: {
            fields: {
                RegisteredSearchTypes: null,
                Definition: null,
                /**
                 * @static
                 * @public
                 * @memberof Codex.SearchTypes
                 * @type Codex.SearchType
                 */
                Reference: null,
                TextSource: null,
                BoundSource: null,
                Language: null,
                Repository: null,
                Project: null,
                Commit: null,
                CommitFiles: null,
                ProjectReference: null,
                Property: null,
                StoredFilter: null,
                RegisteredEntity: null
            },
            ctors: {
                init: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    this.RegisteredSearchTypes = new (System.Collections.Generic.List$1(Codex.SearchType)).ctor();
                    this.Definition = Codex.SearchType.Create(Codex.IDefinitionSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Definition");
                    this.Reference = Codex.SearchType.Create(Codex.IReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Reference");
                    this.TextSource = Codex.SearchType.Create(Codex.ITextSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "TextSource");
                    this.BoundSource = Codex.SearchType.Create(Codex.IBoundSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "BoundSource");
                    this.Language = Codex.SearchType.Create(Codex.ILanguageSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Language");
                    this.Repository = Codex.SearchType.Create(Codex.IRepositorySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Repository");
                    this.Project = Codex.SearchType.Create(Codex.IProjectSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Project").Exclude(($t = { ntype: 38, t: Codex.IProjectSearchModel, n: "sm" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = Bridge.getMetadata(Codex.IReferencedProject).m[0], { ntype: 23, t: $t4.rt, expression: ($t3 = {"td":System.Linq.Enumerable,"a":2,"n":"First","is":true,"t":8,"pi":[{"n":"source","pt":System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject),"ps":0}],"tpc":1,"def":function (TSource, source) { return System.Linq.Enumerable.from(source).first(); },"rt":Codex.IReferencedProject,"p":[System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject)]}, { ntype: 6, t: $t3.rt, obj: null, method: $t3, args: Bridge.toList([{ ntype: 10, t: System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject), operand: ($t2 = Bridge.getMetadata(Codex.IProject).m[2], { ntype: 23, t: $t2.rt, expression: ($t1 = Bridge.getMetadata(Codex.IProjectSearchModel).m[0], { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), member: $t2 }) }]) }), member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t]) })));
                    this.Commit = Codex.SearchType.Create(Codex.ICommitSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Commit");
                    this.CommitFiles = Codex.SearchType.Create(Codex.ICommitFilesSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "CommitFiles");
                    this.ProjectReference = Codex.SearchType.Create(Codex.IProjectReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "ProjectReference");
                    this.Property = Codex.SearchType.Create(Codex.IPropertySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Property");
                    this.StoredFilter = Codex.SearchType.Create(Codex.IStoredFilter, Codex.SearchTypes.RegisteredSearchTypes, "StoredFilter");
                    this.RegisteredEntity = Codex.SearchType.Create(Codex.IRegisteredEntity, Codex.SearchTypes.RegisteredSearchTypes, "RegisteredEntity");
                }
            }
        }
    });

    Bridge.define("Codex.SerializationInterfaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            Type: null
        },
        ctors: {
            ctor: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Type = type;
            }
        }
    });

    Bridge.define("Codex.Utilities.CollectionUtilities");

    Bridge.define("Codex.Utilities.CollectionUtilities.Empty$1", function (T) { return {
        statics: {
            fields: {
                List: null,
                Array: null
            },
            ctors: {
                init: function () {
                    this.List = new (System.Collections.Generic.List$1(T)).$ctor2(0);
                    this.Array = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("Codex.Utilities.SerializationUtilities", {
        statics: {
            methods: {
                AssignDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return lastValue.v;
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                },
                RemoveDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return Bridge.getDefaultValue(T);
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Application.ctor.call(this);
                Codex.View.Styles.Initialize();
                // TODO: This should be configurable through build properties somehow
                Codex.View.CodexProvider.Instance = new Codex.View.Web.WebApiCodex("http://localhost:9491/api/codex/");
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    Bridge.define("Codex.View.NotifyPropertyChangedBase", {
        inherits: [System.ComponentModel.INotifyPropertyChanged],
        events: {
            propertyChanged: null
        },
        alias: ["addPropertyChanged", "System$ComponentModel$INotifyPropertyChanged$addPropertyChanged",
        "removePropertyChanged", "System$ComponentModel$INotifyPropertyChanged$removePropertyChanged"],
        methods: {
            addPropertyChanged: function (value) {
                this.addpropertyChanged(value);
            },
            removePropertyChanged: function (value) {
                this.removepropertyChanged(value);
            },
            OnPropertyChanged: function (memberName) {
                if (memberName === void 0) { memberName = null; }
                !Bridge.staticEquals(this.propertyChanged, null) ? this.propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(memberName)) : null;
            }
        }
    });

    Bridge.define("Codex.View.LeftPaneContent", {
        $kind: "interface"
    });

    Bridge.define("Codex.View.CategoryGroupSearchResultsViewModel", {
        props: {
            HeaderVisibility: {
                get: function () {
                    return System.String.isNullOrEmpty(this.Header) ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
                }
            },
            Header: null,
            ProjectResults: null
        },
        ctors: {
            init: function () {
                this.ProjectResults = new Codex.View.ProjectResultsViewModel.ctor();
            },
            ctor: function (searchString, response) {
                this.$initialize();
                var result = response.Result;

                this.ProjectResults.ProjectGroups = System.Linq.Enumerable.from(result.Hits).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f1).groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f2).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f6).toList(Codex.View.ProjectGroupResultsViewModel);

                this.Header = System.String.format("{0} text search hits for '{1}'", Bridge.box(result.Hits.Count, System.Int32), searchString);
            }
        }
    });

    Bridge.ns("Codex.View.CategoryGroupSearchResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.CategoryGroupSearchResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$TextLine;
        },
        f2: function (sr) {
            return sr.Codex$IProjectScopeEntity$ProjectId;
        },
        f3: function (sr) {
            return sr.Codex$IProjectFileScopeEntity$ProjectRelativePath;
        },
        f4: function (sr) {
            return new Codex.View.TextSpanSearchResultViewModel(sr);
        },
        f5: function (fileGroup) {
            var $t1;
            return ($t1 = new Codex.View.FileResultsViewModel(), $t1.Path = fileGroup.key(), $t1.Items = fileGroup.select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f4).toList(Codex.View.TextSpanSearchResultViewModel), $t1);
        },
        f6: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f3).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f5).toList(Codex.View.FileResultsViewModel), $t);
        }
    });

    Bridge.define("Codex.View.CodexProvider", {
        statics: {
            props: {
                Instance: null
            }
        }
    });

    Bridge.define("Codex.View.Commands", {
        statics: {
            fields: {
                GoToDefinition: null,
                GoToSpan: null
            },
            ctors: {
                init: function () {
                    this.GoToDefinition = Codex.View.Commands.CreateCommand("GoToDefinition");
                    this.GoToSpan = Codex.View.Commands.CreateCommand("GoToSpan");
                }
            },
            methods: {
                CreateCommand: function (name) {
                    if (name === void 0) { name = null; }
                    return new System.Windows.Input.RoutedCommand(name, Codex.View.Commands);
                }
            }
        }
    });

    Bridge.define("Codex.View.EditorHostControl", {
        inherits: [System.Windows.FrameworkElement,Granular.Presentation.Web.IHtmlElementHost],
        statics: {
            fields: {
                SourceFileProperty: null
            },
            ctors: {
                init: function () {
                    this.SourceFileProperty = System.Windows.DependencyProperty.Register("SourceFile", Codex.IBoundSourceFile, Codex.View.EditorHostControl, new System.Windows.PropertyMetadata.$ctor2(null, Codex.View.EditorHostControl.OnSourceFileChanged));
                }
            },
            methods: {
                OnSourceFileChanged: function (d, e) {
                    var $t;
                    ($t = (Bridge.as(d, Codex.View.EditorHostControl))) != null ? $t.OnSourceFileChanged() : null;
                }
            }
        },
        fields: {
            m_htmlElement: null,
            m_editor: null,
            renderQueue: null,
            m_text: null
        },
        props: {
            SourceFile: {
                get: function () {
                    return Bridge.cast(this.GetValue(Codex.View.EditorHostControl.SourceFileProperty), Codex.IBoundSourceFile);
                },
                set: function (value) {
                    this.SetValue(Codex.View.EditorHostControl.SourceFileProperty, value);
                }
            }
        },
        alias: ["SetRenderElement", "Granular$Presentation$Web$IHtmlElementHost$SetRenderElement"],
        ctors: {
            init: function () {
                this.renderQueue = new Granular.Host.RenderQueue();
                this.m_text = "Hello World";
            },
            ctor: function () {
                this.$initialize();
                System.Windows.FrameworkElement.ctor.call(this);
                this.Focusable = true;
                this.IsHitTestVisible = true;
            }
        },
        methods: {
            SetRenderElement: function (htmlElement) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    this.m_htmlElement = htmlElement;
                                    $task1 = Monaco.Editor.Create(htmlElement, { value: this.m_text, language: "text", readOnly: true });
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    this.m_editor = $taskResult1;

                                    this.VisualIsHitTestVisible = true;
                                    this.VisualBackground = System.Windows.Media.Brushes.Transparent;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            ArrangeOverride: function (finalSize) {
                var currentSize = this.VisualBounds.Size;
                finalSize = System.Windows.FrameworkElement.prototype.ArrangeOverride.call(this, finalSize);

                if (!System.Windows.SizeExtensions.IsClose(currentSize, finalSize)) {
                    if (this.m_editor != null) {
                        this.renderQueue.InvokeAsync(Bridge.fn.bind(this, $asm.$.Codex.View.EditorHostControl.f1));
                    }
                }

                return finalSize;
            },
            OnSourceFileChanged: function () {
                var $t, $t1;
                this.m_text = ($t = (($t1 = this.SourceFile) != null ? $t1.Codex$IBoundSourceFile$SourceFile.Codex$ISourceFile$Content : null), $t != null ? $t : "");
                this.m_editor.setValue(this.m_text);
            }
        }
    });

    Bridge.ns("Codex.View.EditorHostControl", $asm.$);

    Bridge.apply($asm.$.Codex.View.EditorHostControl, {
        f1: function () {
            this.m_editor.layout();
        }
    });

    Bridge.define("Codex.View.FileItemResultViewModel");

    Bridge.define("Codex.View.ProjectItemResultViewModel");

    Bridge.define("Codex.View.TypedCommandBinding$1", function (T) { return {
        inherits: [System.Windows.Input.CommandBinding],
        events: {
            CommandExecuted: null
        },
        ctors: {
            ctor: function (command) {
                this.$initialize();
                System.Windows.Input.CommandBinding.ctor.call(this);
                this.Command = command;
                this.addExecuted(Bridge.fn.cacheBind(this, this.TypedCommandBinding_Executed));
            }
        },
        methods: {
            TypedCommandBinding_Executed: function (sender, e) {
                var parameter = e.Parameter;
                var typedParameter = Bridge.cast(Bridge.unbox(parameter), T);
                !Bridge.staticEquals(this.CommandExecuted, null) ? this.CommandExecuted(typedParameter) : null;
            }
        }
    }; });

    Bridge.define("Codex.View.GranularExtensions", {
        statics: {
            methods: {
                AsTriggerProperty: function (dependencyProperty) {
                    return new System.Windows.DependencyPropertyPathElement(dependencyProperty);
                },
                WithSetters: function (trigger, setters) {
                    var $t;
                    if (setters === void 0) { setters = []; }
                    $t = Bridge.getEnumerator(setters);
                    try {
                        while ($t.moveNext()) {
                            var setter = $t.Current;
                            trigger.Setters.add(setter);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }
                    return trigger;
                }
            }
        }
    });

    /** @namespace Codex.View */

    /**
     * Interaction logic for LeftPane.xaml
     *
     * @public
     * @class Codex.View.LeftPaneView
     * @augments System.Windows.Controls.UserControl
     */
    Bridge.define("Codex.View.LeftPaneView", {
        inherits: [System.Windows.Controls.UserControl],
        fields: {
            SearchInfo: null,
            PaneContent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/LeftPaneView.xaml"));
            }
        }
    });

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            ViewModel: null,
            SearchBox: null,
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null,
            LeftPane: null
        },
        props: {
            CodexService: null
        },
        ctors: {
            init: function () {
                this.ViewModel = new Codex.View.ViewModelDataContext();
                this.CodexService = Codex.View.CodexProvider.Instance;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
                this.DataContext = this.ViewModel;
                this.ViewModel.Initialize();
                this.SearchBox.Text = "ixedoc";
            }
        },
        methods: {
            Button_Click: function (sender, e) { },
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Grid_Loaded");
            },
            SearchTextChanged: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    searchString, 
                    $t, 
                    response, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    searchString = this.SearchBox.Text;
                                    searchString = searchString.trim();

                                    if (searchString.length < 3) {
                                        this.ViewModel.LeftPane = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter at least 3 characters.", $t);
                                        return;
                                    }

                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$SearchAsync(($t = new Codex.Sdk.Search.SearchArguments(), $t.SearchString = searchString, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromSearchResponse(searchString, response);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            GoToSpanExecuted: function (lineSpan) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    sourceFileResponse, 
                    $t, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$GetSourceAsync(($t = new Codex.Sdk.Search.GetSourceArguments(), $t.ProjectId = lineSpan.Codex$IProjectScopeEntity$ProjectId, $t.ProjectRelativePath = lineSpan.Codex$IProjectFileScopeEntity$ProjectRelativePath, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    sourceFileResponse = $taskResult1;

                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor3(sourceFileResponse);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            GoToDefinitionExecuted: function (symbol) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    response, 
                    $t, 
                    reference, 
                    sourceFileResponse, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2,3,4,5,6,8], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync(($t = new Codex.Sdk.Search.FindDefinitionLocationArguments(), $t.ProjectId = symbol.Codex$ICodeSymbol$ProjectId, $t.SymbolId = symbol.Codex$ICodeSymbol$Id.Value, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    if (response.Error != null || response.Result.Hits.Count === 0) {
                                        $step = 2;
                                        continue;
                                    } else  {
                                        $step = 3;
                                        continue;
                                    }
                                }
                                case 2: {
                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor2(response);
                                    $step = 8;
                                    continue;
                                }
                                case 3: {
                                    if (response.Result.Hits.Count > 1) {
                                        $step = 4;
                                        continue;
                                    } else  {
                                        $step = 5;
                                        continue;
                                    }
                                }
                                case 4: {
                                    // Show definitions in left pane
                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor2(response);
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    reference = response.Result.Hits.getItem(0);
                                    $task2 = this.CodexService.Codex$Sdk$Search$ICodex$GetSourceAsync(($t = new Codex.Sdk.Search.GetSourceArguments(), $t.ProjectId = reference.Codex$IProjectScopeEntity$ProjectId, $t.ProjectRelativePath = reference.Codex$IProjectFileScopeEntity$ProjectRelativePath, $t));
                                    $step = 6;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 6: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    sourceFileResponse = $taskResult2;

                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor3(sourceFileResponse);
                                    $step = 7;
                                    continue;
                                }

                                case 8: {
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            UpdateRightPane: function (getViewModel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    rightViewModel, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = getViewModel();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    rightViewModel = $taskResult1;
                                    this.ViewModel.RightPane = rightViewModel;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.ProjectGroupResultsViewModel", {
        props: {
            ProjectName: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.Styles", {
        statics: {
            fields: {
                MouseOverBackgroundProperty: null,
                IsMouseOverHeaderProperty: null
            },
            ctors: {
                init: function () {
                    this.MouseOverBackgroundProperty = System.Windows.DependencyProperty.RegisterAttached("MouseOverBackground", System.Windows.Media.Brush, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(System.Windows.Media.Brushes.Transparent));
                    this.IsMouseOverHeaderProperty = System.Windows.DependencyProperty.RegisterAttached("IsMouseOverHeader", System.Boolean, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(Bridge.box(false, System.Boolean, System.Boolean.toString)));
                }
            },
            methods: {
                GetMouseOverBackground: function (obj) {
                    return Bridge.cast(obj.GetValue(Codex.View.Styles.MouseOverBackgroundProperty), System.Windows.Media.Brush);
                },
                SetMouseOverBackground: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.MouseOverBackgroundProperty, value);
                },
                GetIsMouseOverHeader: function (obj) {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj.GetValue(Codex.View.Styles.IsMouseOverHeaderProperty)), System.Boolean));
                },
                SetIsMouseOverHeader: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.IsMouseOverHeaderProperty, Bridge.box(value, System.Boolean, System.Boolean.toString));
                },
                Initialize: function () { }
            }
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null,
                JQueryReference: null
            }
        }
    });

    Bridge.define("Monaco.Editor", {
        statics: {
            methods: {
                Create: function (htmlElement, options) {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            $task1 = Monaco.MonacoLibrary.InitializeAsync();
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            $tcs.setResult(monaco.editor.create(htmlElement, options));
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });

    /** @namespace Monaco */

    /**
     * Responsible for loading the monaco editor javascript library using the loader.js
     included with monaco
     *
     * @static
     * @abstract
     * @public
     * @class Monaco.MonacoLibrary
     */
    Bridge.define("Monaco.MonacoLibrary", {
        statics: {
            fields: {
                initializeTask: null
            },
            methods: {
                InitializeAsync: function () {
                    if (Monaco.MonacoLibrary.initializeTask == null) {
                        // Only initialize once
                        Monaco.MonacoLibrary.initializeTask = Monaco.MonacoLibrary.InitializeCoreAsync();
                    }

                    return Monaco.MonacoLibrary.initializeTask;
                },
                InitializeCoreAsync: function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            require.config({ paths: { 'vs': 'node_modules/monaco-editor/dev/vs' } });
                                            $task1 = Bridge.loadModule({amd: ["vs/editor/editor.main"]}, function () { monaco_editor_ignored = arguments[0]; });
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });

    Bridge.define("System.CompatibilityExtensions", {
        statics: {
            methods: {
                ToLowerInvariant: function (value) {
                    return value.toLowerCase();
                }
            }
        }
    });

    Bridge.define("Codex.EntityBase", {
        inherits: [Codex.ISerializableEntity],
        methods: {
            Initialize: function () { },
            OnSerializingCore: function () { },
            OnDeserializedCore: function () { },
            Codex$ISerializableEntity$OnSerializing: function () {
                this.OnSerializingCore();
            },
            Codex$ISerializableEntity$OnDeserialized: function () {
                this.OnDeserializedCore();
            }
        }
    });

    Bridge.define("Codex.IProjectScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepoFileScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceSearchModelBase", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a classified span of text
     *
     * @abstract
     * @public
     * @class Codex.IClassificationSpan
     * @implements  Codex.ISpan
     */
    Bridge.define("Codex.IClassificationSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a changed file in a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitChangedFile
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitChangedFile", {
        inherits: [Codex.ICommitFileLink],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSymbol", {
        inherits: [Codex.ICodeSymbol],
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ILineSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @abstract
     * @public
     * @class Codex.IRegisteredEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IRegisteredEntity", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositorySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @abstract
     * @public
     * @class Codex.IStoredFilter
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IStoredFilter", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Documentation for typed parameter
     *
     * @abstract
     * @public
     * @class Codex.ITypedParameterDocumentation
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ITypedParameterDocumentation", {
        inherits: [Codex.IParameterDocumentation],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.PropertyMapBase", {
        inherits: [System.Collections.Generic.Dictionary$2(System.String,System.String)]
    });

    Bridge.define("Codex.Sdk.Search.BinaryFilter$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexFilter$1(T)],
        fields: {
            Operator: 0,
            Left: null,
            Right: null
        },
        ctors: {
            ctor: function (op, left, right) {
                this.$initialize();
                Codex.Sdk.Search.IndexFilter$1(T).ctor.call(this);
                this.Operator = op;
                this.Left = left;
                this.Right = right;
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.ContextCodexArgumentsBase", {
        inherits: [Codex.Sdk.Search.CodexArgumentsBase],
        props: {
            /**
             * The id of the repository referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingRepositoryId
             * @type string
             */
            ReferencingRepositoryId: null,
            /**
             * The id of the project referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingProjectId
             * @type string
             */
            ReferencingProjectId: null,
            /**
             * The id of the file referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingFileId
             * @type string
             */
            ReferencingFileId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.FullTextIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse],
        props: {
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse$1
             * @function Result
             * @type T
             */
            Result: Bridge.getDefaultValue(T)
        },
        methods: {
            toString: function () {
                return System.String.format("Result: {0}, {1}", this.Result, Codex.Sdk.Search.IndexQueryResponse.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.definei("Codex.Sdk.Search.IPrefixProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.ITermProperty$1(T)],
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.NormalizedKeywordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixFullNameIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.SortwordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.SearchType$1", function (TSearchType) { return {
        inherits: [Codex.SearchType],
        fields: {
            CopyToFields: null,
            InheritFields: null
        },
        props: {
            Type: {
                get: function () {
                    return TSearchType;
                }
            }
        },
        ctors: {
            init: function () {
                this.CopyToFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
                this.InheritFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function (name) {
                this.$initialize();
                Codex.SearchType.ctor.call(this);
                this.Name = name;
                this.IndexName = System.CompatibilityExtensions.ToLowerInvariant(this.Name);
            }
        },
        methods: {
            Inherit: function (T, providerField, searchField) {
                return this;
            },
            CopyTo: function (sourceField, targetField) {
                return this;
            },
            Exclude: function (searchField) {
                return this;
            },
            SearchAs: function (T, searchField, behavior) {
                return this;
            }
        }
    }; });

    Bridge.define("Codex.View.BindableValue$1", function (T) { return {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            value: Bridge.getDefaultValue(T)
        },
        props: {
            Value: {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                    this.OnPropertyChanged("Value");
                }
            }
        }
    }; });

    Bridge.define("Codex.View.CategorizedSearchResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            Categories: null
        },
        ctors: {
            ctor: function (searchString, response) {
                this.$initialize();
                this.Categories = function (_o1) {
                        _o1.add(new Codex.View.CategoryGroupSearchResultsViewModel(searchString, response));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(Codex.View.CategoryGroupSearchResultsViewModel)).ctor());
            }
        }
    });

    Bridge.define("Codex.View.FileResultsViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            Path: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.LeftPaneViewModel", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        statics: {
            fields: {
                Initial: null
            },
            ctors: {
                init: function () {
                    var $t;
                    this.Initial = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter a search string. Start with ` for full text search results only.", $t);
                }
            },
            methods: {
                FromSearchResponse: function (searchString, response) {
                    var $t, $t1;
                    if (response.Error != null) {
                        return ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = response.Error, $t);
                    } else if ((($t = response.Result) != null ? $t.Hits : null) == null || response.Result.Hits.Count === 0) {
                        return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.SearchInfo = System.String.format("No results found.", null), $t1);
                    }

                    var result = response.Result;
                    var isDefinitionsResult = result.Hits.getItem(0).Codex$Sdk$Search$ISearchResult$Definition != null;
                    return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.Content = isDefinitionsResult ? Bridge.cast(new Codex.View.ProjectResultsViewModel.$ctor1(searchString, response), Codex.View.LeftPaneContent) : new Codex.View.CategorizedSearchResultsViewModel(searchString, response), $t1.SearchInfo = isDefinitionsResult ? (System.Int64(result.Hits.Count).lt(result.Total) ? System.String.format("Displaying top {0} results out of {1}:", Bridge.box(result.Hits.Count, System.Int32), result.Total) : System.String.format("{0} results found:", Bridge.box(result.Hits.Count, System.Int32))) : "", $t1);
                }
            }
        },
        props: {
            SearchInfoVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.SearchInfo) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            SearchInfo: null,
            ContentVisibility: {
                get: function () {
                    return this.Content != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Content: null
        }
    });

    Bridge.define("Codex.View.ProjectResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            ProjectGroups: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (searchString, response) {
                this.$initialize();
                this.ProjectGroups = System.Linq.Enumerable.from(response.Result.Hits).select($asm.$.Codex.View.ProjectResultsViewModel.f1).groupBy($asm.$.Codex.View.ProjectResultsViewModel.f2).select($asm.$.Codex.View.ProjectResultsViewModel.f4).toList(Codex.View.ProjectGroupResultsViewModel);
            }
        }
    });

    Bridge.ns("Codex.View.ProjectResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.ProjectResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$Definition;
        },
        f2: function (sr) {
            return sr.Codex$ICodeSymbol$ProjectId;
        },
        f3: function (symbol) {
            return new Codex.View.SymbolResultViewModel(symbol);
        },
        f4: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.select($asm.$.Codex.View.ProjectResultsViewModel.f3).toList(Codex.View.SymbolResultViewModel), $t);
        }
    });

    Bridge.define("Codex.View.RightPaneViewModel", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        props: {
            ErrorVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.Error) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Error: null,
            EditorVisibility: {
                get: function () {
                    return this.SourceFile != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Hidden;
                }
            },
            SourceFile: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.NotifyPropertyChangedBase.ctor.call(this);
            },
            $ctor3: function (sourceFileResponse) {
                this.$initialize();
                Codex.View.NotifyPropertyChangedBase.ctor.call(this);
                this.Error = sourceFileResponse.Error;
                this.SourceFile = sourceFileResponse.Result;
            },
            $ctor2: function (response) {
                this.$initialize();
                Codex.View.NotifyPropertyChangedBase.ctor.call(this);
                this.Error = response.Error;
            },
            $ctor1: function (sourceFile) {
                this.$initialize();
                Codex.View.NotifyPropertyChangedBase.ctor.call(this);
                this.SourceFile = sourceFile;
            }
        }
    });

    Bridge.define("Codex.View.SymbolResultViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            Symbol: null,
            ShortName: null,
            DisplayName: null,
            SymbolKind: null,
            ProjectId: null,
            ImageMoniker: null,
            SortOrder: 0,
            IdentifierLength: {
                get: function () {
                    return this.ShortName.length;
                }
            }
        },
        ctors: {
            ctor: function (symbol) {
                var $t;
                this.$initialize();
                Codex.View.ProjectItemResultViewModel.ctor.call(this);
                this.Symbol = symbol;
                this.ShortName = symbol.Codex$IDefinitionSymbol$ShortName;
                this.DisplayName = symbol.Codex$IDefinitionSymbol$DisplayName;
                this.ProjectId = symbol.Codex$ICodeSymbol$ProjectId;
                this.SymbolKind = ($t = symbol.Codex$ICodeSymbol$Kind) != null ? System.CompatibilityExtensions.ToLowerInvariant($t) : null;
            }
        }
    });

    Bridge.define("Codex.View.TextSpanSearchResultViewModel", {
        inherits: [Codex.View.FileItemResultViewModel],
        props: {
            SearchResult: null,
            LineNumber: 0,
            PrefixText: null,
            ContentText: null,
            SuffixText: null
        },
        ctors: {
            ctor: function (result) {
                this.$initialize();
                Codex.View.FileItemResultViewModel.ctor.call(this);
                this.SearchResult = result;
                var referringSpan = result.Codex$Sdk$Search$ITextLineSpanResult$TextSpan;
                this.LineNumber = referringSpan.Codex$ILineSpan$LineNumber;
                var lineSpanText = referringSpan.Codex$ITextLineSpan$LineSpanText;
                if (lineSpanText != null) {
                    this.PrefixText = lineSpanText.substr(0, referringSpan.Codex$ILineSpan$LineSpanStart);
                    this.ContentText = lineSpanText.substr(referringSpan.Codex$ILineSpan$LineSpanStart, referringSpan.Codex$ISpan$Length);
                    this.SuffixText = lineSpanText.substr(((referringSpan.Codex$ILineSpan$LineSpanStart + referringSpan.Codex$ISpan$Length) | 0));
                }
            }
        }
    });

    Bridge.define("Codex.View.ViewModelDataContext", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            leftPane: null,
            rightPane: null
        },
        props: {
            LeftPane: {
                get: function () {
                    return this.leftPane;
                },
                set: function (value) {
                    this.leftPane = value;
                    this.OnPropertyChanged("LeftPane");
                }
            },
            RightPane: {
                get: function () {
                    return this.rightPane;
                },
                set: function (value) {
                    this.rightPane = value;
                    this.OnPropertyChanged("RightPane");
                }
            }
        },
        ctors: {
            init: function () {
                this.rightPane = new Codex.View.RightPaneViewModel.ctor();
            }
        },
        methods: {
            Initialize: function () {
                this.LeftPane = Codex.View.LeftPaneViewModel.Initial;
            }
        }
    });

    Bridge.define("Codex.View.Web.WebApiCodex", {
        inherits: [Codex.Sdk.Search.ICodex],
        fields: {
            baseUrl: null
        },
        alias: [
            "FindAllReferencesAsync", "Codex$Sdk$Search$ICodex$FindAllReferencesAsync",
            "FindDefinitionAsync", "Codex$Sdk$Search$ICodex$FindDefinitionAsync",
            "FindDefinitionLocationAsync", "Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync",
            "GetSourceAsync", "Codex$Sdk$Search$ICodex$GetSourceAsync",
            "SearchAsync", "Codex$Sdk$Search$ICodex$SearchAsync"
        ],
        ctors: {
            ctor: function (baseUrl) {
                this.$initialize();
                this.baseUrl = System.String.endsWith(baseUrl, "/") ? baseUrl : (baseUrl || "") + String.fromCharCode(47);
            }
        },
        methods: {
            FindAllReferencesAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.IReferenceSearchResult), Codex.Sdk.Search.CodexServiceMethod.FindAllRefs, $arguments);
            },
            FindDefinitionAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.DefinitionSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IDefinitionSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDef, $arguments);
            },
            FindDefinitionLocationAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.IReferenceSearchResult), Codex.Sdk.Search.CodexServiceMethod.FindDefLocation, $arguments);
            },
            GetSourceAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.ObjectModel.BoundSourceFile), Codex.Sdk.Search.IndexQueryResponse$1(Codex.IBoundSourceFile), Codex.Sdk.Search.CodexServiceMethod.GetSource, $arguments);
            },
            SearchAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.SearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments);
            },
            PostAsync: function (TSerializedResult, TResult, searchMethod, $arguments) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var argumentsData = Newtonsoft.Json.JsonConvert.SerializeObject($arguments);

                var config = { url: url, type: "POST", data: argumentsData, contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TSerializedResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            }
        }
    });

    Bridge.define("Codex.IProjectFileScopeEntity", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IBoundSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    /**
     * Describes a commit in version control
     *
     * @abstract
     * @public
     * @class Codex.ICommit
     * @implements  Codex.ICommitScopeEntity
     */
    Bridge.define("Codex.ICommit", {
        inherits: [Codex.ICommitScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a directory in source control
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesDirectory
     * @implements  Codex.IRepoFileScopeEntity
     */
    Bridge.define("Codex.ICommitFilesDirectory", {
        inherits: [Codex.IRepoFileScopeEntity],
        $kind: "interface"
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesSearchModel
     * @implements  Codex.ICommitScopeEntity
     * @implements  Codex.IRepoScopeEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ICommitFilesSearchModel", {
        inherits: [Codex.ICommitScopeEntity,Codex.IRepoScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationReferenceSymbol
     * @implements  Codex.IReferenceSymbol
     */
    Bridge.define("Codex.IDocumentationReferenceSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterDefinitionSpan
     * @implements  Codex.ILineSpan
     */
    Bridge.define("Codex.IParameterDefinitionSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextLineSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProject", {
        inherits: [Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectReferenceSearchModel", {
        inherits: [Codex.IProjectScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.RepoScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IRepoScopeEntity],
        fields: {
            m_RepositoryName: null
        },
        props: {
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: ["RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepoScopeEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @public
     * @class Codex.ObjectModel.SearchEntity
     * @augments Codex.EntityBase
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ObjectModel.SearchEntity", {
        inherits: [Codex.EntityBase,Codex.ISearchEntity],
        fields: {
            m_Uid: null,
            m_EntityContentId: null,
            m_EntityContentSize: 0,
            m_EntityVersion: null,
            m_ShardStableId: System.Int64(0)
        },
        props: {
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * Defines the content addressable identifier for the entity. This is used
             to determine if an entity with the same {@link } should be updated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentId
             * @type string
             */
            EntityContentId: {
                get: function () {
                    return this.m_EntityContentId;
                },
                set: function (value) {
                    this.m_EntityContentId = value;
                }
            },
            /**
             * Defines the size of the raw serialized entity.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentSize
             * @type number
             */
            EntityContentSize: {
                get: function () {
                    return this.m_EntityContentSize;
                },
                set: function (value) {
                    this.m_EntityContentSize = value;
                }
            },
            /**
             * The version number used when storing the entity (for use by ElasticSearch concurrency control
             to prevent races when storing values)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityVersion
             * @type ?number
             */
            EntityVersion: {
                get: function () {
                    return this.m_EntityVersion;
                },
                set: function (value) {
                    this.m_EntityVersion = value;
                }
            },
            /**
             * The per-shard stable identity (derived from ElasticSearch sequence number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function ShardStableId
             * @type number
             */
            ShardStableId: {
                get: function () {
                    return this.m_ShardStableId;
                },
                set: function (value) {
                    this.m_ShardStableId = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$ISearchEntity$Uid",
            "EntityContentId", "Codex$ISearchEntity$EntityContentId",
            "EntityContentSize", "Codex$ISearchEntity$EntityContentSize",
            "EntityVersion", "Codex$ISearchEntity$EntityVersion",
            "ShardStableId", "Codex$ISearchEntity$ShardStableId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Uid = value.Codex$ISearchEntity$Uid;
                this.m_EntityContentId = value.Codex$ISearchEntity$EntityContentId;
                this.m_EntityContentSize = value.Codex$ISearchEntity$EntityContentSize;
                this.m_EntityVersion = value.Codex$ISearchEntity$EntityVersion;
                this.m_ShardStableId = value.Codex$ISearchEntity$ShardStableId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Describes a branch in a repository
     *
     * @public
     * @class Codex.ObjectModel.Branch
     * @augments Codex.EntityBase
     * @implements  Codex.IBranch
     */
    Bridge.define("Codex.ObjectModel.Branch", {
        inherits: [Codex.EntityBase,Codex.IBranch],
        fields: {
            m_Name: null,
            m_Description: null,
            m_HeadCommitId: null
        },
        props: {
            /**
             * The name of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The branch description
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The head commit of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function HeadCommitId
             * @type string
             */
            HeadCommitId: {
                get: function () {
                    return this.m_HeadCommitId;
                },
                set: function (value) {
                    this.m_HeadCommitId = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IBranch$Name",
            "Description", "Codex$IBranch$Description",
            "HeadCommitId", "Codex$IBranch$HeadCommitId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Branch, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IBranch$Name;
                this.m_Description = value.Codex$IBranch$Description;
                this.m_HeadCommitId = value.Codex$IBranch$HeadCommitId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Span", {
        inherits: [Codex.EntityBase,Codex.ISpan],
        fields: {
            m_Start: 0,
            m_Length: 0
        },
        props: {
            /**
             * The absolute character offset of the span within the document
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Start
             * @type number
             */
            Start: {
                get: function () {
                    return this.m_Start;
                },
                set: function (value) {
                    this.m_Start = value;
                }
            },
            /**
             * The length of the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Length
             * @type number
             */
            Length: {
                get: function () {
                    return this.m_Length;
                },
                set: function (value) {
                    this.m_Length = value;
                }
            },
            /**
             * The absolute character offset of the end (exclusive) of the span within the document
             *
             * @instance
             * @public
             * @readonly
             * @memberof Codex.ObjectModel.Span
             * @function End
             * @type number
             */
            End: {
                get: function () {
                    return ((this.Start + this.Length) | 0);
                }
            }
        },
        alias: [
            "Start", "Codex$ISpan$Start",
            "Length", "Codex$ISpan$Length"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Span, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Start = value.Codex$ISpan$Start;
                this.m_Length = value.Codex$ISpan$Length;
                return Bridge.cast((this), TTarget);
            },
            Contains: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start >= this.Start && span.End <= this.End;
            },
            SpanEquals: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start === this.Start && span.End === this.End;
            }
        }
    });

    /**
     * Describes styling for a given classification
     *
     * @public
     * @class Codex.ObjectModel.ClassificationStyle
     * @augments Codex.EntityBase
     * @implements  Codex.IClassificationStyle
     */
    Bridge.define("Codex.ObjectModel.ClassificationStyle", {
        inherits: [Codex.EntityBase,Codex.IClassificationStyle],
        fields: {
            m_Color: 0,
            m_Italic: false,
            m_Name: null
        },
        props: {
            /**
             * The default classification color for the classification. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Color
             * @type number
             */
            Color: {
                get: function () {
                    return this.m_Color;
                },
                set: function (value) {
                    this.m_Color = value;
                }
            },
            /**
             * Indicates whether the spans classified with this classification should have italic font by default
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Italic
             * @type boolean
             */
            Italic: {
                get: function () {
                    return this.m_Italic;
                },
                set: function (value) {
                    this.m_Italic = value;
                }
            },
            /**
             * The name of the classification
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "Color", "Codex$IClassificationStyle$Color",
            "Italic", "Codex$IClassificationStyle$Italic",
            "Name", "Codex$IClassificationStyle$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ClassificationStyle, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Color = value.Codex$IClassificationStyle$Color;
                this.m_Italic = value.Codex$IClassificationStyle$Italic;
                this.m_Name = value.Codex$IClassificationStyle$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReview", {
        inherits: [Codex.EntityBase,Codex.ICodeReview],
        fields: {
            m_Id: null,
            m_Description: null,
            m_Url: null,
            m_Status: 0
        },
        props: {
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * Url for accessing code review in source control management (i.e. GitHub or VSO)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReview
             * @function Url
             * @type string
             */
            Url: {
                get: function () {
                    return this.m_Url;
                },
                set: function (value) {
                    this.m_Url = value;
                }
            },
            Status: {
                get: function () {
                    return this.m_Status;
                },
                set: function (value) {
                    this.m_Status = value;
                }
            }
        },
        alias: [
            "Id", "Codex$ICodeReview$Id",
            "Description", "Codex$ICodeReview$Description",
            "Url", "Codex$ICodeReview$Url",
            "Status", "Codex$ICodeReview$Status"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReview, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Id = value.Codex$ICodeReview$Id;
                this.m_Description = value.Codex$ICodeReview$Description;
                this.m_Url = value.Codex$ICodeReview$Url;
                this.m_Status = value.Codex$ICodeReview$Status;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewComment", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewComment],
        fields: {
            m_Text: null,
            m_Reviewer: null,
            m_Importance: 0,
            m_CommentTime: null
        },
        props: {
            Text: {
                get: function () {
                    return this.m_Text;
                },
                set: function (value) {
                    this.m_Text = value;
                }
            },
            /**
             * The name of the reviewer which made the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Reviewer
             * @type string
             */
            Reviewer: {
                get: function () {
                    return this.m_Reviewer;
                },
                set: function (value) {
                    this.m_Reviewer = value;
                }
            },
            /**
             * The importance of the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Importance
             * @type Codex.CommentImportance
             */
            Importance: {
                get: function () {
                    return this.m_Importance;
                },
                set: function (value) {
                    this.m_Importance = value;
                }
            },
            /**
             * The time when the comment was submitted
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function CommentTime
             * @type System.DateTime
             */
            CommentTime: {
                get: function () {
                    return this.m_CommentTime;
                },
                set: function (value) {
                    this.m_CommentTime = value;
                }
            }
        },
        alias: [
            "Text", "Codex$ICodeReviewComment$Text",
            "Reviewer", "Codex$ICodeReviewComment$Reviewer",
            "Importance", "Codex$ICodeReviewComment$Importance",
            "CommentTime", "Codex$ICodeReviewComment$CommentTime"
        ],
        ctors: {
            init: function () {
                this.m_CommentTime = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewComment, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Text = value.Codex$ICodeReviewComment$Text;
                this.m_Reviewer = value.Codex$ICodeReviewComment$Reviewer;
                this.m_Importance = value.Codex$ICodeReviewComment$Importance;
                this.m_CommentTime = value.Codex$ICodeReviewComment$CommentTime;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewCommentThread", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewCommentThread],
        fields: {
            m_OriginalSpan: null,
            m_StartIteration: 0,
            m_LastUpdated: null,
            m_FileRepoRelativePath: null,
            m_Comments: null
        },
        props: {
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function Codex$ICodeReviewCommentThread$OriginalSpan
             * @type Codex.ILineSpan
             */
            Codex$ICodeReviewCommentThread$OriginalSpan: {
                get: function () {
                    return this.OriginalSpan;
                }
            },
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function OriginalSpan
             * @type Codex.ObjectModel.LineSpan
             */
            OriginalSpan: {
                get: function () {
                    return this.m_OriginalSpan;
                },
                set: function (value) {
                    this.m_OriginalSpan = value;
                }
            },
            /**
             * The iteration where the comment originated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The last tie
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function LastUpdated
             * @type System.DateTime
             */
            LastUpdated: {
                get: function () {
                    return this.m_LastUpdated;
                },
                set: function (value) {
                    this.m_LastUpdated = value;
                }
            },
            FileRepoRelativePath: {
                get: function () {
                    return this.m_FileRepoRelativePath;
                },
                set: function (value) {
                    this.m_FileRepoRelativePath = value;
                }
            },
            Codex$ICodeReviewCommentThread$Comments: {
                get: function () {
                    return this.Comments;
                }
            },
            Comments: {
                get: function () {
                    return this.m_Comments;
                },
                set: function (value) {
                    this.m_Comments = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewCommentThread$StartIteration",
            "LastUpdated", "Codex$ICodeReviewCommentThread$LastUpdated",
            "FileRepoRelativePath", "Codex$ICodeReviewCommentThread$FileRepoRelativePath"
        ],
        ctors: {
            init: function () {
                this.m_LastUpdated = System.DateTime.getDefaultValue();
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewCommentThread, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_OriginalSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.OriginalSpan, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f1);
                ;
                this.m_StartIteration = value.Codex$ICodeReviewCommentThread$StartIteration;
                this.m_LastUpdated = value.Codex$ICodeReviewCommentThread$LastUpdated;
                this.m_FileRepoRelativePath = value.Codex$ICodeReviewCommentThread$FileRepoRelativePath;
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewCommentThread$Comments).select($asm.$.Codex.ObjectModel.CodeReviewCommentThread.f3));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewCommentThread", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewCommentThread, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.CodeReviewComment.ctor().CopyFrom(Codex.ObjectModel.CodeReviewComment, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewComment, Bridge.global.Codex.ObjectModel.CodeReviewComment, v, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewerInfo", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewerInfo],
        fields: {
            m_Name: null
        },
        props: {
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: ["Name", "Codex$ICodeReviewerInfo$Name"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewerInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ICodeReviewerInfo$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewFile", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewFile],
        fields: {
            m_StartIteration: 0,
            m_RepoRelativePath: null,
            m_FileId: null,
            m_BaselineFileId: null,
            m_ChangeKind: 0
        },
        props: {
            /**
             * The first iteration in which this file appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The relative path in the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The file id of the new version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * The file id of the baseline version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function BaselineFileId
             * @type string
             */
            BaselineFileId: {
                get: function () {
                    return this.m_BaselineFileId;
                },
                set: function (value) {
                    this.m_BaselineFileId = value;
                }
            },
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewFile$StartIteration",
            "RepoRelativePath", "Codex$ICodeReviewFile$RepoRelativePath",
            "FileId", "Codex$ICodeReviewFile$FileId",
            "BaselineFileId", "Codex$ICodeReviewFile$BaselineFileId",
            "ChangeKind", "Codex$ICodeReviewFile$ChangeKind"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_StartIteration = value.Codex$ICodeReviewFile$StartIteration;
                this.m_RepoRelativePath = value.Codex$ICodeReviewFile$RepoRelativePath;
                this.m_FileId = value.Codex$ICodeReviewFile$FileId;
                this.m_BaselineFileId = value.Codex$ICodeReviewFile$BaselineFileId;
                this.m_ChangeKind = value.Codex$ICodeReviewFile$ChangeKind;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewIteration", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewIteration],
        fields: {
            m_IterationNumber: 0,
            m_ReviewId: null,
            m_Description: null,
            m_Files: null
        },
        props: {
            IterationNumber: {
                get: function () {
                    return this.m_IterationNumber;
                },
                set: function (value) {
                    this.m_IterationNumber = value;
                }
            },
            ReviewId: {
                get: function () {
                    return this.m_ReviewId;
                },
                set: function (value) {
                    this.m_ReviewId = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Codex$ICodeReviewIteration$Files: {
                get: function () {
                    return this.Files;
                }
            },
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        alias: [
            "IterationNumber", "Codex$ICodeReviewIteration$IterationNumber",
            "ReviewId", "Codex$ICodeReviewIteration$ReviewId",
            "Description", "Codex$ICodeReviewIteration$Description"
        ],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewIteration, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_IterationNumber = value.Codex$ICodeReviewIteration$IterationNumber;
                this.m_ReviewId = value.Codex$ICodeReviewIteration$ReviewId;
                this.m_Description = value.Codex$ICodeReviewIteration$Description;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewIteration$Files).select($asm.$.Codex.ObjectModel.CodeReviewIteration.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewIteration", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewIteration, {
        f1: function (_v) {
            return new Codex.ObjectModel.CodeReviewFile.ctor().CopyFrom(Codex.ObjectModel.CodeReviewFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewFile, Bridge.global.Codex.ObjectModel.CodeReviewFile, v, $asm.$.Codex.ObjectModel.CodeReviewIteration.f1);
        }
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitFileLink
     * @augments Codex.EntityBase
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ObjectModel.CommitFileLink", {
        inherits: [Codex.EntityBase,Codex.ICommitFileLink],
        fields: {
            m_RepoRelativePath: null,
            m_FileId: null,
            m_VersionControlFileId: null
        },
        props: {
            /**
             * The relative path in the repository to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * Unique identifer for file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * Unique identifer for file content as determined by version control
             (i.e. the blob hash)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function VersionControlFileId
             * @type string
             */
            VersionControlFileId: {
                get: function () {
                    return this.m_VersionControlFileId;
                },
                set: function (value) {
                    this.m_VersionControlFileId = value;
                }
            }
        },
        alias: [
            "RepoRelativePath", "Codex$ICommitFileLink$RepoRelativePath",
            "FileId", "Codex$ICommitFileLink$FileId",
            "VersionControlFileId", "Codex$ICommitFileLink$VersionControlFileId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CommitFileLink, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$ICommitFileLink$RepoRelativePath;
                this.m_FileId = value.Codex$ICommitFileLink$FileId;
                this.m_VersionControlFileId = value.Codex$ICommitFileLink$VersionControlFileId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Symbol", {
        inherits: [Codex.EntityBase,Codex.ICodeSymbol],
        fields: {
            m_ProjectId: null,
            m_Id: null,
            m_Kind: null
        },
        props: {
            /**
             * The identifier of the project in which the symbol appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The identifier for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Id
             * @type Codex.ObjectModel.SymbolId
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            /**
             * The symbol kind. (i.e. interface, method, field)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Kind
             * @type string
             */
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Extension data used during analysis/search
             TODO: Why is this needed?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ExtData
             * @type Codex.ObjectModel.ExtensionData
             */
            ExtData: null
        },
        alias: [
            "ProjectId", "Codex$ICodeSymbol$ProjectId",
            "Id", "Codex$ICodeSymbol$Id",
            "Kind", "Codex$ICodeSymbol$Kind"
        ],
        ctors: {
            init: function () {
                this.m_Id = new Codex.ObjectModel.SymbolId();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Symbol, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$ICodeSymbol$ProjectId;
                this.m_Id = value.Codex$ICodeSymbol$Id;
                this.m_Kind = value.Codex$ICodeSymbol$Kind;
                return Bridge.cast((this), TTarget);
            },
            Equals: function (other) {
                return System.String.equals(this.ProjectId, other.ProjectId, 4) && System.String.equals(this.Id.Value, other.Id.Value, 4);
            },
            equals: function (obj) {
                if (Bridge.referenceEquals(null, obj)) {
                    return false;
                }
                if (Bridge.referenceEquals(this, obj)) {
                    return true;
                }
                if (!Bridge.referenceEquals(Bridge.getType(obj), Bridge.getType(this))) {
                    return false;
                }
                return this.Equals(Bridge.cast(obj, Codex.ObjectModel.Symbol));
            },
            getHashCode: function () {
                var $t, $t1, $t2, $t3;
                return (Bridge.Int.mul((($t = (($t1 = this.ProjectId) != null ? Bridge.getHashCode($t1) : null), $t != null ? $t : 0)), 397)) ^ (($t2 = (($t3 = this.Id.Value) != null ? Bridge.getHashCode($t3) : null), $t2 != null ? $t2 : 0));
            },
            toString: function () {
                return this.Id.Value;
            }
        }
    });

    /**
     * Defines documentation about a symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IDocumentationInfo
     */
    Bridge.define("Codex.ObjectModel.DocumentationInfo", {
        inherits: [Codex.EntityBase,Codex.IDocumentationInfo],
        fields: {
            m_DeclarationName: null,
            m_Comment: null,
            m_AssociatedSymbol: null,
            m_References: null,
            m_Summary: null,
            m_Remarks: null,
            m_Arguments: null,
            m_TypeParameters: null,
            m_Exceptions: null
        },
        props: {
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition (this is the raw doc comment text)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$AssociatedSymbol
             * @type Codex.ICodeSymbol
             */
            Codex$IDocumentationInfo$AssociatedSymbol: {
                get: function () {
                    return this.AssociatedSymbol;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function AssociatedSymbol
             * @type Codex.ObjectModel.Symbol
             */
            AssociatedSymbol: {
                get: function () {
                    return this.m_AssociatedSymbol;
                },
                set: function (value) {
                    this.m_AssociatedSymbol = value;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function References
             * @type System.Collections.Generic.List$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Describes the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Summary
             * @type string
             */
            Summary: {
                get: function () {
                    return this.m_Summary;
                },
                set: function (value) {
                    this.m_Summary = value;
                }
            },
            /**
             * Supplementation information about the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Remarks
             * @type string
             */
            Remarks: {
                get: function () {
                    return this.m_Remarks;
                },
                set: function (value) {
                    this.m_Remarks = value;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Arguments
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Arguments: {
                get: function () {
                    return this.Arguments;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Arguments
             * @type System.Collections.Generic.List$1
             */
            Arguments: {
                get: function () {
                    return this.m_Arguments;
                },
                set: function (value) {
                    this.m_Arguments = value;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$TypeParameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$TypeParameters: {
                get: function () {
                    return this.TypeParameters;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function TypeParameters
             * @type System.Collections.Generic.List$1
             */
            TypeParameters: {
                get: function () {
                    return this.m_TypeParameters;
                },
                set: function (value) {
                    this.m_TypeParameters = value;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Exceptions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Exceptions: {
                get: function () {
                    return this.Exceptions;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Exceptions
             * @type System.Collections.Generic.List$1
             */
            Exceptions: {
                get: function () {
                    return this.m_Exceptions;
                },
                set: function (value) {
                    this.m_Exceptions = value;
                }
            }
        },
        alias: [
            "DeclarationName", "Codex$IDocumentationInfo$DeclarationName",
            "Comment", "Codex$IDocumentationInfo$Comment",
            "Summary", "Codex$IDocumentationInfo$Summary",
            "Remarks", "Codex$IDocumentationInfo$Remarks"
        ],
        ctors: {
            init: function () {
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).ctor();
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).ctor();
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.DocumentationInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_DeclarationName = value.Codex$IDocumentationInfo$DeclarationName;
                this.m_Comment = value.Codex$IDocumentationInfo$Comment;
                this.m_AssociatedSymbol = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.AssociatedSymbol, $asm.$.Codex.ObjectModel.DocumentationInfo.f1);
                ;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$References).select($asm.$.Codex.ObjectModel.DocumentationInfo.f3));
                this.m_Summary = value.Codex$IDocumentationInfo$Summary;
                this.m_Remarks = value.Codex$IDocumentationInfo$Remarks;
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Arguments).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$TypeParameters).select($asm.$.Codex.ObjectModel.DocumentationInfo.f7));
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Exceptions).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DocumentationInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DocumentationInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f2);
        },
        f4: function (_v) {
            return new Codex.ObjectModel.TypedParameterDocumentation.ctor().CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, _v);
        },
        f5: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ITypedParameterDocumentation, Bridge.global.Codex.ObjectModel.TypedParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f4);
        },
        f6: function (_v) {
            return new Codex.ObjectModel.ParameterDocumentation.ctor().CopyFrom(Codex.ObjectModel.ParameterDocumentation, _v);
        },
        f7: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDocumentation, Bridge.global.Codex.ObjectModel.ParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f6);
        }
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @public
     * @class Codex.ObjectModel.EncodingDescription
     * @augments Codex.EntityBase
     * @implements  Codex.IEncodingDescription
     */
    Bridge.define("Codex.ObjectModel.EncodingDescription", {
        inherits: [Codex.EntityBase,Codex.IEncodingDescription],
        fields: {
            m_Name: null,
            m_Preamble: null
        },
        props: {
            /**
             * The name of the encoding
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The encoding preamble
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Preamble
             * @type Array.<number>
             */
            Preamble: {
                get: function () {
                    return this.m_Preamble;
                },
                set: function (value) {
                    this.m_Preamble = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IEncodingDescription$Name",
            "Preamble", "Codex$IEncodingDescription$Preamble"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.EncodingDescription, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IEncodingDescription$Name;
                this.m_Preamble = value.Codex$IEncodingDescription$Preamble;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.FileStatistics", {
        inherits: [Codex.EntityBase,Codex.IFileStatistics],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.FileStatistics, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Index", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.IIndex],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Index, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageInfo", {
        inherits: [Codex.EntityBase,Codex.ILanguageInfo],
        fields: {
            m_Name: null,
            m_Classifications: null
        },
        props: {
            /**
             * The name of the language
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Codex$ILanguageInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ILanguageInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Classifications
             * @type System.Collections.Generic.List$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            }
        },
        alias: ["Name", "Codex$ILanguageInfo$Name"],
        ctors: {
            init: function () {
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.LanguageInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ILanguageInfo$Name;
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).$ctor1(System.Linq.Enumerable.from(value.Codex$ILanguageInfo$Classifications).select($asm.$.Codex.ObjectModel.LanguageInfo.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ClassificationStyle.ctor().CopyFrom(Codex.ObjectModel.ClassificationStyle, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationStyle, Bridge.global.Codex.ObjectModel.ClassificationStyle, v, $asm.$.Codex.ObjectModel.LanguageInfo.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.OutliningRegion", {
        inherits: [Codex.EntityBase,Codex.IOutliningRegion],
        fields: {
            m_Kind: null,
            m_Header: null,
            m_Content: null
        },
        props: {
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Header
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Header: {
                get: function () {
                    return this.Header;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Header
             * @type Codex.ObjectModel.LineSpan
             */
            Header: {
                get: function () {
                    return this.m_Header;
                },
                set: function (value) {
                    this.m_Header = value;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Content
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Content: {
                get: function () {
                    return this.Content;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Content
             * @type Codex.ObjectModel.LineSpan
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            }
        },
        alias: ["Kind", "Codex$IOutliningRegion$Kind"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.OutliningRegion, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Kind = value.Codex$IOutliningRegion$Kind;
                this.m_Header = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Header, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                this.m_Content = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Content, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.OutliningRegion", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.OutliningRegion, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        }
    });

    /**
     * Documentation for a method parameter
     *
     * @public
     * @class Codex.ObjectModel.ParameterDocumentation
     * @augments Codex.EntityBase
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.ParameterDocumentation", {
        inherits: [Codex.EntityBase,Codex.IParameterDocumentation],
        fields: {
            m_Name: null,
            m_Comment: null
        },
        props: {
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The comment associated with the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IParameterDocumentation$Name",
            "Comment", "Codex$IParameterDocumentation$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ParameterDocumentation, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IParameterDocumentation$Name;
                this.m_Comment = value.Codex$IParameterDocumentation$Comment;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertyMap", {
        inherits: [Codex.ObjectModel.PropertyMapBase,Codex.IPropertyMap],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.PropertyMap, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () { }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferencedProject", {
        inherits: [Codex.EntityBase,Codex.IReferencedProject],
        fields: {
            m_ProjectId: null,
            m_Definitions: null,
            m_DisplayName: null,
            m_Properties: null
        },
        props: {
            /**
             * The identifier of the referenced project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferencedProject$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * The display name of the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Properties
             * @type Codex.IPropertyMap
             */
            Codex$IReferencedProject$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IReferencedProject$ProjectId",
            "DisplayName", "Codex$IReferencedProject$DisplayName"
        ],
        ctors: {
            init: function () {
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ReferencedProject, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IReferencedProject$ProjectId;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferencedProject$Definitions).select($asm.$.Codex.ObjectModel.ReferencedProject.f2));
                this.m_DisplayName = value.Codex$IReferencedProject$DisplayName;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.ReferencedProject.f3);
                ;
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                var $t;
                return ($t = this.DisplayName, $t != null ? $t : this.ProjectId);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferencedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferencedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, v, $asm.$.Codex.ObjectModel.ReferencedProject.f1);
        },
        f3: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.Repository", {
        inherits: [Codex.EntityBase,Codex.IRepository],
        fields: {
            m_Name: null,
            m_Description: null,
            m_Id: null,
            m_WebAddress: null,
            m_SourceControlWebAddress: null,
            m_FileWebAddressTransformInputRegex: null,
            m_PrimaryBranch: null,
            m_RepositoryReferences: null
        },
        props: {
            /**
             * The name fo the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The web address for source control of the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function SourceControlWebAddress
             * @type string
             */
            SourceControlWebAddress: {
                get: function () {
                    return this.m_SourceControlWebAddress;
                },
                set: function (value) {
                    this.m_SourceControlWebAddress = value;
                }
            },
            /**
             * The regex for extracting
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function FileWebAddressTransformInputRegex
             * @type string
             */
            FileWebAddressTransformInputRegex: {
                get: function () {
                    return this.m_FileWebAddressTransformInputRegex;
                },
                set: function (value) {
                    this.m_FileWebAddressTransformInputRegex = value;
                }
            },
            /**
             * The name of the primary branch for the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function PrimaryBranch
             * @type string
             */
            PrimaryBranch: {
                get: function () {
                    return this.m_PrimaryBranch;
                },
                set: function (value) {
                    this.m_PrimaryBranch = value;
                }
            },
            Codex$IRepository$RepositoryReferences: {
                get: function () {
                    return this.RepositoryReferences;
                }
            },
            RepositoryReferences: {
                get: function () {
                    return this.m_RepositoryReferences;
                },
                set: function (value) {
                    this.m_RepositoryReferences = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepository$Name",
            "Description", "Codex$IRepository$Description",
            "Id", "Codex$IRepository$Id",
            "WebAddress", "Codex$IRepository$WebAddress",
            "SourceControlWebAddress", "Codex$IRepository$SourceControlWebAddress",
            "FileWebAddressTransformInputRegex", "Codex$IRepository$FileWebAddressTransformInputRegex",
            "PrimaryBranch", "Codex$IRepository$PrimaryBranch"
        ],
        ctors: {
            init: function () {
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Repository, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepository$Name;
                this.m_Description = value.Codex$IRepository$Description;
                this.m_Id = value.Codex$IRepository$Id;
                this.m_WebAddress = value.Codex$IRepository$WebAddress;
                this.m_SourceControlWebAddress = value.Codex$IRepository$SourceControlWebAddress;
                this.m_FileWebAddressTransformInputRegex = value.Codex$IRepository$FileWebAddressTransformInputRegex;
                this.m_PrimaryBranch = value.Codex$IRepository$PrimaryBranch;
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).$ctor1(System.Linq.Enumerable.from(value.Codex$IRepository$RepositoryReferences).select($asm.$.Codex.ObjectModel.Repository.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Repository", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Repository, {
        f1: function (_v) {
            return new Codex.ObjectModel.RepositoryReference.ctor().CopyFrom(Codex.ObjectModel.RepositoryReference, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IRepositoryReference, Bridge.global.Codex.ObjectModel.RepositoryReference, v, $asm.$.Codex.ObjectModel.Repository.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.RepositoryReference", {
        inherits: [Codex.EntityBase,Codex.IRepositoryReference],
        fields: {
            m_Name: null,
            m_Id: null
        },
        props: {
            /**
             * The name of the reference repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Optional. Id of repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Id
             * @type string
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepositoryReference$Name",
            "Id", "Codex$IRepositoryReference$Id"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryReference, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepositoryReference$Name;
                this.m_Id = value.Codex$IRepositoryReference$Id;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @public
     * @class Codex.ObjectModel.RepositoryStoreInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.ObjectModel.RepositoryStoreInfo", {
        inherits: [Codex.EntityBase,Codex.IRepositoryStoreInfo],
        fields: {
            m_Repository: null,
            m_Branch: null,
            m_Commit: null
        },
        props: {
            /**
             * The repository being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Repository
             * @type Codex.IRepository
             */
            Codex$IRepositoryStoreInfo$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            /**
             * The repository being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Repository
             * @type Codex.ObjectModel.Repository
             */
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Branch
             * @type Codex.IBranch
             */
            Codex$IRepositoryStoreInfo$Branch: {
                get: function () {
                    return this.Branch;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Branch
             * @type Codex.ObjectModel.Branch
             */
            Branch: {
                get: function () {
                    return this.m_Branch;
                },
                set: function (value) {
                    this.m_Branch = value;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Commit
             * @type Codex.ICommit
             */
            Codex$IRepositoryStoreInfo$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Commit
             * @type Codex.ObjectModel.Commit
             */
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryStoreInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f1);
                ;
                this.m_Branch = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Branch, Bridge.global.Codex.ObjectModel.Branch, this.Branch, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f2);
                ;
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f3);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositoryStoreInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositoryStoreInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.Branch.ctor().CopyFrom(Codex.ObjectModel.Branch, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SearchResult", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.ISearchResult],
        fields: {
            m_TextLine: null,
            m_Definition: null
        },
        props: {
            /**
             * The text span for a text result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$TextLine
             * @type Codex.Sdk.Search.ITextLineSpanResult
             */
            Codex$Sdk$Search$ISearchResult$TextLine: {
                get: function () {
                    return this.TextLine;
                }
            },
            /**
             * The text span for a text result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function TextLine
             * @type Codex.ObjectModel.TextLineSpanResult
             */
            TextLine: {
                get: function () {
                    return this.m_TextLine;
                },
                set: function (value) {
                    this.m_TextLine = value;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$Sdk$Search$ISearchResult$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchResult, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_TextLine = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpanResult, Bridge.global.Codex.ObjectModel.TextLineSpanResult, this.TextLine, $asm.$.Codex.ObjectModel.SearchResult.f1);
                ;
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.SearchResult.f2);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpanResult.ctor().CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @public
     * @class Codex.ObjectModel.SourceControlFileInfo
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ObjectModel.SourceControlFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceControlFileInfo],
        fields: {
            m_SourceControlContentId: null
        },
        props: {
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceControlFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            }
        },
        alias: ["SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @public
     * @class Codex.ObjectModel.SourceFile
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceFile
     */
    Bridge.define("Codex.ObjectModel.SourceFile", {
        inherits: [Codex.EntityBase,Codex.ISourceFile],
        fields: {
            m_Info: null,
            m_Content: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFile
             * @function Codex$ISourceFile$Info
             * @type Codex.ISourceFileInfo
             */
            Codex$ISourceFile$Info: {
                get: function () {
                    return this.Info;
                }
            },
            /**
             * The information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Info
             * @type Codex.ObjectModel.SourceFileInfo
             */
            Info: {
                get: function () {
                    return this.m_Info;
                },
                set: function (value) {
                    this.m_Info = value;
                }
            },
            /**
             * The content of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Content
             * @type string
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "Content", "Codex$ISourceFile$Content",
            "ExcludeFromSearch", "Codex$ISourceFile$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Info = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.Info, $asm.$.Codex.ObjectModel.SourceFile.f1);
                ;
                this.m_Content = value.Codex$ISourceFile$Content;
                this.m_ExcludeFromSearch = value.Codex$ISourceFile$ExcludeFromSearch;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.StoredBoundSourceFile", {
        inherits: [Codex.EntityBase,Codex.IStoredBoundSourceFile],
        fields: {
            m_BoundSourceFile: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null
        },
        props: {
            Codex$IStoredBoundSourceFile$BoundSourceFile: {
                get: function () {
                    return this.BoundSourceFile;
                }
            },
            BoundSourceFile: {
                get: function () {
                    return this.m_BoundSourceFile;
                },
                set: function (value) {
                    this.m_BoundSourceFile = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            }
        },
        alias: [
            "CompressedClassifications", "Codex$IStoredBoundSourceFile$CompressedClassifications",
            "CompressedReferences", "Codex$IStoredBoundSourceFile$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.StoredBoundSourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_BoundSourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceFile, Bridge.global.Codex.ObjectModel.BoundSourceFile, this.BoundSourceFile, $asm.$.Codex.ObjectModel.StoredBoundSourceFile.f1);
                ;
                this.m_CompressedClassifications = value.Codex$IStoredBoundSourceFile$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IStoredBoundSourceFile$CompressedReferences;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.StoredBoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.StoredBoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.BoundSourceFile.ctor().CopyFrom$5(Codex.ObjectModel.BoundSourceFile, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindSymbolArgumentsBase", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            /**
             * The symbol id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @function SymbolId
             * @type string
             */
            SymbolId: null,
            /**
             * The project id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @function ProjectId
             * @type string
             */
            ProjectId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.GetSourceArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            ProjectId: null,
            ProjectRelativePath: null
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexQueryHitsResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.IndexQueryHits$1(T))]
    }; });

    Bridge.define("Codex.Sdk.Search.SearchArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            SearchString: null
        }
    });

    Bridge.define("Codex.View.GoToDefinitionCommandBinding", {
        inherits: [Codex.View.TypedCommandBinding$1(Codex.IReferenceSymbol)],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.TypedCommandBinding$1(Codex.IReferenceSymbol).ctor.call(this, Codex.View.Commands.GoToDefinition);
            }
        }
    });

    Bridge.define("Codex.IBoundSourceInfo", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolSpan", {
        inherits: [Codex.ITextLineSpan],
        $kind: "interface"
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @abstract
     * @public
     * @class Codex.IProjectFileLink
     * @implements  Codex.IProjectFileScopeEntity
     */
    Bridge.define("Codex.IProjectFileLink", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSearchModel", {
        inherits: [Codex.IProjectFileScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceFileInfo", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.ISourceControlFileInfo,Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.ProjectScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IProjectScopeEntity],
        fields: {
            m_ProjectId: null
        },
        props: {
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: ["ProjectId", "Codex$IProjectScopeEntity$ProjectId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectFileScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IProjectFileScopeEntity],
        fields: {
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.ProjectFileScopeEntity, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IBoundSourceSearchModel],
        fields: {
            m_TextUid: null,
            m_SourceInfo: null,
            m_BindingInfo: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null,
            m_SourceControlInfo: null
        },
        props: {
            /**
             * The unique identifier of the associated {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function TextUid
             * @type string
             */
            TextUid: {
                get: function () {
                    return this.m_TextUid;
                },
                set: function (value) {
                    this.m_TextUid = value;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$SourceInfo
             * @type Codex.ISourceFileInfo
             */
            Codex$IBoundSourceSearchModel$SourceInfo: {
                get: function () {
                    return this.SourceInfo;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceInfo
             * @type Codex.ObjectModel.SourceFileInfo
             */
            SourceInfo: {
                get: function () {
                    return this.m_SourceInfo;
                },
                set: function (value) {
                    this.m_SourceInfo = value;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$BindingInfo
             * @type Codex.IBoundSourceInfo
             */
            Codex$IBoundSourceSearchModel$BindingInfo: {
                get: function () {
                    return this.BindingInfo;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function BindingInfo
             * @type Codex.ObjectModel.BoundSourceInfo
             */
            BindingInfo: {
                get: function () {
                    return this.m_BindingInfo;
                },
                set: function (value) {
                    this.m_BindingInfo = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        alias: [
            "TextUid", "Codex$IBoundSourceSearchModel$TextUid",
            "CompressedClassifications", "Codex$IBoundSourceSearchModel$CompressedClassifications",
            "CompressedReferences", "Codex$IBoundSourceSearchModel$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.BoundSourceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.BoundSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_TextUid = value.Codex$IBoundSourceSearchModel$TextUid;
                this.m_SourceInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.SourceInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f2);
                ;
                this.m_BindingInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceInfo, Bridge.global.Codex.ObjectModel.BoundSourceInfo, this.BindingInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f3);
                ;
                this.m_CompressedClassifications = value.Codex$IBoundSourceSearchModel$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IBoundSourceSearchModel$CompressedReferences;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            OnDeserializedCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = this.CompressedClassifications.Codex$IClassificationList$ToList();
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = this.CompressedReferences.Codex$IReferenceList$ToList();
                }

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.BoundSourceInfo.ctor().CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, v);
        }
    });

    /**
     * Defines a classified span of text
     *
     * @public
     * @class Codex.ObjectModel.ClassificationSpan
     * @augments Codex.ObjectModel.Span
     * @implements  Codex.IClassificationSpan
     */
    Bridge.define("Codex.ObjectModel.ClassificationSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IClassificationSpan],
        fields: {
            m_DefaultClassificationColor: 0,
            m_Classification: null,
            m_LocalGroupId: 0
        },
        props: {
            /**
             * The default classification color for the span. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function DefaultClassificationColor
             * @type number
             */
            DefaultClassificationColor: {
                get: function () {
                    return this.m_DefaultClassificationColor;
                },
                set: function (value) {
                    this.m_DefaultClassificationColor = value;
                }
            },
            /**
             * The classification identifier for the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function Classification
             * @type string
             */
            Classification: {
                get: function () {
                    return this.m_Classification;
                },
                set: function (value) {
                    this.m_Classification = value;
                }
            },
            /**
             * The identifier to the local group of spans which refer to the same common symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function LocalGroupId
             * @type number
             */
            LocalGroupId: {
                get: function () {
                    return this.m_LocalGroupId;
                },
                set: function (value) {
                    this.m_LocalGroupId = value;
                }
            }
        },
        alias: [
            "DefaultClassificationColor", "Codex$IClassificationSpan$DefaultClassificationColor",
            "Classification", "Codex$IClassificationSpan$Classification",
            "LocalGroupId", "Codex$IClassificationSpan$LocalGroupId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ClassificationSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DefaultClassificationColor = value.Codex$IClassificationSpan$DefaultClassificationColor;
                this.m_Classification = value.Codex$IClassificationSpan$Classification;
                this.m_LocalGroupId = value.Codex$IClassificationSpan$LocalGroupId;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.DefaultClassificationColor = -1;
                Codex.ObjectModel.Span.prototype.Initialize.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CommitScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.ICommitScopeEntity],
        fields: {
            m_CommitId: null
        },
        props: {
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitScopeEntity
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            }
        },
        alias: ["CommitId", "Codex$ICommitScopeEntity$CommitId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a changed file in a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitChangedFile
     * @augments Codex.ObjectModel.CommitFileLink
     * @implements  Codex.ICommitChangedFile
     */
    Bridge.define("Codex.ObjectModel.CommitChangedFile", {
        inherits: [Codex.ObjectModel.CommitFileLink,Codex.ICommitChangedFile],
        fields: {
            m_ChangeKind: 0,
            m_OriginalFilePath: null
        },
        props: {
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            },
            /**
             * For a renamed file, the path to the file prior to the rename
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function OriginalFilePath
             * @type string
             */
            OriginalFilePath: {
                get: function () {
                    return this.m_OriginalFilePath;
                },
                set: function (value) {
                    this.m_OriginalFilePath = value;
                }
            }
        },
        alias: [
            "ChangeKind", "Codex$ICommitChangedFile$ChangeKind",
            "OriginalFilePath", "Codex$ICommitChangedFile$OriginalFilePath"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitChangedFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ChangeKind = value.Codex$ICommitChangedFile$ChangeKind;
                this.m_OriginalFilePath = value.Codex$ICommitChangedFile$OriginalFilePath;
                Codex.ObjectModel.CommitFileLink.prototype.CopyFrom.call(this, Codex.ObjectModel.CommitFileLink, Bridge.cast((value), Codex.ICommitFileLink));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepoFileScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IRepoFileScopeEntity],
        fields: {
            m_RepoRelativePath: null
        },
        props: {
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            }
        },
        alias: ["RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepoFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesSearchModel
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.ICommitFilesSearchModel
     */
    Bridge.define("Codex.ObjectModel.CommitFilesSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitFilesSearchModel],
        fields: {
            m_CommitFiles: null,
            m_CommitId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$ICommitFilesSearchModel$CommitFiles: {
                get: function () {
                    return this.CommitFiles;
                }
            },
            CommitFiles: {
                get: function () {
                    return this.m_CommitFiles;
                },
                set: function (value) {
                    this.m_CommitFiles = value;
                }
            },
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "CommitId", "Codex$ICommitScopeEntity$CommitId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            init: function () {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.CommitFilesSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesSearchModel$CommitFiles).select($asm.$.Codex.ObjectModel.CommitFilesSearchModel.f2));
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_CommitId = Bridge.cast((value), Codex.ICommitScopeEntity).Codex$ICommitScopeEntity$CommitId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesSearchModel, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesSearchModel.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.CommitSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitSearchModel],
        fields: {
            m_Commit: null
        },
        props: {
            Codex$ICommitSearchModel$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.CommitSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IDefinitionSearchModel],
        fields: {
            m_Definition: null,
            m_Keywords: null
        },
        props: {
            Codex$IDefinitionSearchModel$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Codex$IDefinitionSearchModel$Keywords
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSearchModel$Keywords: {
                get: function () {
                    return this.Keywords;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Keywords
             * @type System.Collections.Generic.List$1
             */
            Keywords: {
                get: function () {
                    return this.m_Keywords;
                },
                set: function (value) {
                    this.m_Keywords = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSearchModel.f1);
                ;
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IDefinitionSearchModel$Keywords);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IDefinitionSpan],
        fields: {
            m_Definition: null,
            m_Parameters: null
        },
        props: {
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$IDefinitionSpan$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterDefinitionSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDefinitionSpan$Parameters).select($asm.$.Codex.ObjectModel.DefinitionSpan.f3));
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterDefinitionSpan.ctor().CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDefinitionSpan, Bridge.global.Codex.ObjectModel.ParameterDefinitionSpan, v, $asm.$.Codex.ObjectModel.DefinitionSpan.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSymbol", {
        inherits: [Codex.ObjectModel.Symbol,Codex.IReferenceSymbol],
        fields: {
            m_ReferenceKind: null,
            m_IsImplicitlyDeclared: false,
            m_ExcludeFromDefaultSearch: false,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The kind of reference. This is used to group references.
             (i.e. for C#(aka .NET) MethodOverride, InterfaceMemberImplementation, InterfaceImplementation, etc.)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ReferenceKind
             * @type string
             */
            ReferenceKind: {
                get: function () {
                    return this.m_ReferenceKind;
                },
                set: function (value) {
                    this.m_ReferenceKind = value;
                }
            },
            /**
             * Indicates the corresponding definition is implicitly declared and therefore this should not be
             used for find all references search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function IsImplicitlyDeclared
             * @type boolean
             */
            IsImplicitlyDeclared: {
                get: function () {
                    return this.m_IsImplicitlyDeclared;
                },
                set: function (value) {
                    this.m_IsImplicitlyDeclared = value;
                }
            },
            /**
             * Indicates if the symbol should be excluded from the definition/find all references search (by default).
             Symbol will only be included if kind is explicitly specified
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromDefaultSearch
             * @type boolean
             */
            ExcludeFromDefaultSearch: {
                get: function () {
                    return this.m_ExcludeFromDefaultSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromDefaultSearch = value;
                }
            },
            /**
             * Indicates if the symbol should NEVER be included in the definition/find all references search.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceKind", "Codex$IReferenceSymbol$ReferenceKind",
            "IsImplicitlyDeclared", "Codex$IReferenceSymbol$IsImplicitlyDeclared",
            "ExcludeFromDefaultSearch", "Codex$IReferenceSymbol$ExcludeFromDefaultSearch",
            "ExcludeFromSearch", "Codex$IReferenceSymbol$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ReferenceKind = value.Codex$IReferenceSymbol$ReferenceKind;
                this.m_IsImplicitlyDeclared = value.Codex$IReferenceSymbol$IsImplicitlyDeclared;
                this.m_ExcludeFromDefaultSearch = value.Codex$IReferenceSymbol$ExcludeFromDefaultSearch;
                this.m_ExcludeFromSearch = value.Codex$IReferenceSymbol$ExcludeFromSearch;
                Codex.ObjectModel.Symbol.prototype.CopyFrom.call(this, Codex.ObjectModel.Symbol, Bridge.cast((value), Codex.ICodeSymbol));
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                return (this.ReferenceKind || "") + " " + (Codex.ObjectModel.Symbol.prototype.toString.call(this) || "");
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ILanguageSearchModel],
        fields: {
            m_Language: null
        },
        props: {
            Codex$ILanguageSearchModel$Language: {
                get: function () {
                    return this.Language;
                }
            },
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LanguageSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Language = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LanguageInfo, Bridge.global.Codex.ObjectModel.LanguageInfo, this.Language, $asm.$.Codex.ObjectModel.LanguageSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.LanguageInfo.ctor().CopyFrom(Codex.ObjectModel.LanguageInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.LineSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.ILineSpan],
        fields: {
            m_LineIndex: null,
            m_LineNumber: null,
            m_LineSpanStart: 0,
            m_LineOffset: 0
        },
        props: {
            /**
             * The 0-based index of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineIndex
             * @type number
             */
            LineIndex: {
                get: function () {
                    return this.CoerceLineIndex(this.m_LineIndex);
                },
                set: function (value) {
                    this.m_LineIndex = value;
                }
            },
            /**
             * The 1-based line number of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineNumber
             * @type number
             */
            LineNumber: {
                get: function () {
                    return this.CoerceLineNumber(this.m_LineNumber);
                },
                set: function (value) {
                    this.m_LineNumber = value;
                }
            },
            /**
             * The character position where the span starts in the line text
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineSpanStart
             * @type number
             */
            LineSpanStart: {
                get: function () {
                    return this.m_LineSpanStart;
                },
                set: function (value) {
                    this.m_LineSpanStart = value;
                }
            },
            /**
             * If positive, the offset of the line span from the beginning of the line
             If negative, the offset of the linespan from the end of the next line
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineOffset
             * @type number
             */
            LineOffset: {
                get: function () {
                    return this.m_LineOffset;
                },
                set: function (value) {
                    this.m_LineOffset = value;
                }
            }
        },
        alias: [
            "LineIndex", "Codex$ILineSpan$LineIndex",
            "LineNumber", "Codex$ILineSpan$LineNumber",
            "LineSpanStart", "Codex$ILineSpan$LineSpanStart",
            "LineOffset", "Codex$ILineSpan$LineOffset"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LineSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_LineIndex = value.Codex$ILineSpan$LineIndex;
                this.m_LineNumber = value.Codex$ILineSpan$LineNumber;
                this.m_LineSpanStart = value.Codex$ILineSpan$LineSpanStart;
                this.m_LineOffset = value.Codex$ILineSpan$LineOffset;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            CoerceLineIndex: function (value) {
                if (value == null || (System.Nullable.lte(value, 0) && this.m_LineNumber != null)) {
                    if (this.m_LineNumber != null) {
                        // Line number is 1-based whereas this value is 0-based
                        return ((System.Nullable.getValue(this.m_LineNumber) - 1) | 0);
                    } else {
                        return 0;
                    }
                }

                return System.Nullable.getValue(value);
            },
            CoerceLineNumber: function (value) {
                if (value == null || (System.Nullable.eq(value, 1) && this.m_LineIndex != null)) {
                    if (this.m_LineIndex != null) {
                        // Line index is 0-based whereas this value is 1-based
                        return ((System.Nullable.getValue(this.m_LineIndex) + 1) | 0);
                    } else {
                        return 1;
                    }
                }

                return System.Nullable.getValue(value);
            },
            OnDeserializedCore: function () {
                Codex.ObjectModel.Span.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.Span.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectReferenceSearchModel],
        fields: {
            m_ProjectReference: null,
            m_ProjectId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$IProjectReferenceSearchModel$ProjectReference: {
                get: function () {
                    return this.ProjectReference;
                }
            },
            ProjectReference: {
                get: function () {
                    return this.m_ProjectReference;
                },
                set: function (value) {
                    this.m_ProjectReference = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectReference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, this.ProjectReference, $asm.$.Codex.ObjectModel.ProjectReferenceSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectSearchModel],
        fields: {
            m_Project: null
        },
        props: {
            Codex$IProjectSearchModel$Project: {
                get: function () {
                    return this.Project;
                }
            },
            Project: {
                get: function () {
                    return this.m_Project;
                },
                set: function (value) {
                    this.m_Project = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Project = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.AnalyzedProject, Bridge.global.Codex.ObjectModel.AnalyzedProject, this.Project, $asm.$.Codex.ObjectModel.ProjectSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.AnalyzedProject.ctor().CopyFrom$2(Codex.ObjectModel.AnalyzedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.PropertySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IPropertySearchModel],
        fields: {
            m_Key: null,
            m_Value: null,
            m_OwnerId: null
        },
        props: {
            /**
             * The key of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Key
             * @type string
             */
            Key: {
                get: function () {
                    return this.m_Key;
                },
                set: function (value) {
                    this.m_Key = value;
                }
            },
            /**
             * The value of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Value
             * @type string
             */
            Value: {
                get: function () {
                    return this.m_Value;
                },
                set: function (value) {
                    this.m_Value = value;
                }
            },
            /**
             * The identifier of the object owning this property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function OwnerId
             * @type string
             */
            OwnerId: {
                get: function () {
                    return this.m_OwnerId;
                },
                set: function (value) {
                    this.m_OwnerId = value;
                }
            }
        },
        alias: [
            "Key", "Codex$IPropertySearchModel$Key",
            "Value", "Codex$IPropertySearchModel$Value",
            "OwnerId", "Codex$IPropertySearchModel$OwnerId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.PropertySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Key = value.Codex$IPropertySearchModel$Key;
                this.m_Value = value.Codex$IPropertySearchModel$Value;
                this.m_OwnerId = value.Codex$IPropertySearchModel$OwnerId;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IReferenceSearchResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @public
     * @class Codex.ObjectModel.RegisteredEntity
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IRegisteredEntity
     */
    Bridge.define("Codex.ObjectModel.RegisteredEntity", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRegisteredEntity],
        fields: {
            m_DateAdded: null
        },
        props: {
            /**
             * The date in which the entity was registered (i.e. added to the store)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RegisteredEntity
             * @function DateAdded
             * @type System.DateTime
             */
            DateAdded: {
                get: function () {
                    return this.m_DateAdded;
                },
                set: function (value) {
                    this.m_DateAdded = value;
                }
            }
        },
        alias: ["DateAdded", "Codex$IRegisteredEntity$DateAdded"],
        ctors: {
            init: function () {
                this.m_DateAdded = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RegisteredEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateAdded = value.Codex$IRegisteredEntity$DateAdded;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepositorySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRepositorySearchModel],
        fields: {
            m_Repository: null
        },
        props: {
            Codex$IRepositorySearchModel$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepositorySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositorySearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositorySearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositorySearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceSearchModelBase", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ISourceSearchModelBase],
        fields: {
            m_SourceControlInfo: null
        },
        props: {
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.SourceSearchModelBase, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.SourceSearchModelBase.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceSearchModelBase", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceSearchModelBase, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        }
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @public
     * @class Codex.ObjectModel.StoredFilter
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IStoredFilter
     */
    Bridge.define("Codex.ObjectModel.StoredFilter", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IStoredFilter],
        fields: {
            m_DateUpdated: null,
            m_IndexName: null,
            m_Shard: 0,
            m_StableIds: null,
            m_BaseUids: null,
            m_UnionFilters: null,
            m_Filter: null,
            m_FilterHash: null,
            m_FilterCount: 0
        },
        props: {
            /**
             * The time of the last update to the stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function DateUpdated
             * @type System.DateTime
             */
            DateUpdated: {
                get: function () {
                    return this.m_DateUpdated;
                },
                set: function (value) {
                    this.m_DateUpdated = value;
                }
            },
            /**
             * The name of the index to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function IndexName
             * @type string
             */
            IndexName: {
                get: function () {
                    return this.m_IndexName;
                },
                set: function (value) {
                    this.m_IndexName = value;
                }
            },
            /**
             * The shard to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Shard
             * @type number
             */
            Shard: {
                get: function () {
                    return this.m_Shard;
                },
                set: function (value) {
                    this.m_Shard = value;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$StableIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$StableIds: {
                get: function () {
                    return this.StableIds;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function StableIds
             * @type System.Collections.Generic.List$1
             */
            StableIds: {
                get: function () {
                    return this.m_StableIds;
                },
                set: function (value) {
                    this.m_StableIds = value;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$BaseUids
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$BaseUids: {
                get: function () {
                    return this.BaseUids;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function BaseUids
             * @type System.Collections.Generic.List$1
             */
            BaseUids: {
                get: function () {
                    return this.m_BaseUids;
                },
                set: function (value) {
                    this.m_BaseUids = value;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$UnionFilters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$UnionFilters: {
                get: function () {
                    return this.UnionFilters;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function UnionFilters
             * @type System.Collections.Generic.List$1
             */
            UnionFilters: {
                get: function () {
                    return this.m_UnionFilters;
                },
                set: function (value) {
                    this.m_UnionFilters = value;
                }
            },
            /**
             * The stored filter bit set which matches the stored filter documents
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Filter
             * @type Array.<number>
             */
            Filter: {
                get: function () {
                    return this.m_Filter;
                },
                set: function (value) {
                    this.m_Filter = value;
                }
            },
            /**
             * The hash of {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterHash
             * @type string
             */
            FilterHash: {
                get: function () {
                    return this.m_FilterHash;
                },
                set: function (value) {
                    this.m_FilterHash = value;
                }
            },
            /**
             * The count of elements matched by {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterCount
             * @type number
             */
            FilterCount: {
                get: function () {
                    return this.m_FilterCount;
                },
                set: function (value) {
                    this.m_FilterCount = value;
                }
            }
        },
        alias: [
            "DateUpdated", "Codex$IStoredFilter$DateUpdated",
            "IndexName", "Codex$IStoredFilter$IndexName",
            "Shard", "Codex$IStoredFilter$Shard",
            "Filter", "Codex$IStoredFilter$Filter",
            "FilterHash", "Codex$IStoredFilter$FilterHash",
            "FilterCount", "Codex$IStoredFilter$FilterCount"
        ],
        ctors: {
            init: function () {
                this.m_DateUpdated = System.DateTime.getDefaultValue();
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).ctor();
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.StoredFilter, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateUpdated = value.Codex$IStoredFilter$DateUpdated;
                this.m_IndexName = value.Codex$IStoredFilter$IndexName;
                this.m_Shard = value.Codex$IStoredFilter$Shard;
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).$ctor1(value.Codex$IStoredFilter$StableIds);
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IStoredFilter$BaseUids);
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).$ctor1(value.Codex$IStoredFilter$UnionFilters);
                this.m_Filter = value.Codex$IStoredFilter$Filter;
                this.m_FilterHash = value.Codex$IStoredFilter$FilterHash;
                this.m_FilterCount = value.Codex$IStoredFilter$FilterCount;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ITextLineSpanResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.TextSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ITextSourceSearchModel],
        fields: {
            m_File: null,
            m_SourceControlInfo: null
        },
        props: {
            Codex$ITextSourceSearchModel$File: {
                get: function () {
                    return this.File;
                }
            },
            File: {
                get: function () {
                    return this.m_File;
                },
                set: function (value) {
                    this.m_File = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextSourceSearchModel, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TextSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_File = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.File, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f2);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    /**
     * Documentation for typed parameter
     *
     * @public
     * @class Codex.ObjectModel.TypedParameterDocumentation
     * @augments Codex.ObjectModel.ParameterDocumentation
     * @implements  Codex.ITypedParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.TypedParameterDocumentation", {
        inherits: [Codex.ObjectModel.ParameterDocumentation,Codex.ITypedParameterDocumentation],
        fields: {
            m_Type: null
        },
        props: {
            /**
             * The type of the parameter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Codex$ITypedParameterDocumentation$Type
             * @type Codex.IDocumentationReferenceSymbol
             */
            Codex$ITypedParameterDocumentation$Type: {
                get: function () {
                    return this.Type;
                }
            },
            /**
             * The type of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Type
             * @type Codex.ObjectModel.DocumentationReferenceSymbol
             */
            Type: {
                get: function () {
                    return this.m_Type;
                },
                set: function (value) {
                    this.m_Type = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Type = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, this.Type, $asm.$.Codex.ObjectModel.TypedParameterDocumentation.f1);
                ;
                Codex.ObjectModel.ParameterDocumentation.prototype.CopyFrom.call(this, Codex.ObjectModel.ParameterDocumentation, Bridge.cast((value), Codex.IParameterDocumentation));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TypedParameterDocumentation", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TypedParameterDocumentation, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindAllReferencesArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionLocationArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @abstract
     * @public
     * @class Codex.IBoundSourceFile
     * @implements  Codex.IBoundSourceInfo
     */
    Bridge.define("Codex.IBoundSourceFile", {
        inherits: [Codex.IBoundSourceInfo],
        $kind: "interface"
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterReferenceSpan
     * @implements  Codex.ISymbolSpan
     */
    Bridge.define("Codex.IParameterReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.AnalyzedProject", {
        inherits: [Codex.ObjectModel.ProjectScopeEntity,Codex.IProject],
        fields: {
            m_ProjectKind: null,
            m_Files: null,
            m_ProjectReferences: null
        },
        props: {
            /**
             * The project kind (see {@link })
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectKind
             * @type string
             */
            ProjectKind: {
                get: function () {
                    return this.m_ProjectKind;
                },
                set: function (value) {
                    this.m_ProjectKind = value;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$ProjectReferences
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$ProjectReferences: {
                get: function () {
                    return this.ProjectReferences;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectReferences
             * @type System.Collections.Generic.List$1
             */
            ProjectReferences: {
                get: function () {
                    return this.m_ProjectReferences;
                },
                set: function (value) {
                    this.m_ProjectReferences = value;
                }
            }
        },
        alias: ["ProjectKind", "Codex$IProject$ProjectKind"],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).ctor();
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectKind = value.Codex$IProject$ProjectKind;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$Files).select($asm.$.Codex.ObjectModel.AnalyzedProject.f2));
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$ProjectReferences).select($asm.$.Codex.ObjectModel.AnalyzedProject.f4));
                Codex.ObjectModel.ProjectScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ProjectScopeEntity, Bridge.cast((value), Codex.IProjectScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.AnalyzedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.AnalyzedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.ProjectFileLink.ctor().CopyFrom$4(Codex.ObjectModel.ProjectFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IProjectFileLink, Bridge.global.Codex.ObjectModel.ProjectFileLink, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f3);
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceInfo", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IBoundSourceInfo],
        fields: {
            m_ReferenceCount: null,
            m_DefinitionCount: null,
            m_Language: null,
            m_References: null,
            m_Definitions: null,
            m_Classifications: null,
            m_OutliningRegions: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The number of references in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ReferenceCount
             * @type number
             */
            ReferenceCount: {
                get: function () {
                    return this.CoerceReferenceCount(this.m_ReferenceCount);
                },
                set: function (value) {
                    this.m_ReferenceCount = value;
                }
            },
            /**
             * The number of definitions in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function DefinitionCount
             * @type number
             */
            DefinitionCount: {
                get: function () {
                    return this.CoerceDefinitionCount(this.m_DefinitionCount);
                },
                set: function (value) {
                    this.m_DefinitionCount = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$OutliningRegions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$OutliningRegions: {
                get: function () {
                    return this.OutliningRegions;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function OutliningRegions
             * @type System.Collections.Generic.List$1
             */
            OutliningRegions: {
                get: function () {
                    return this.m_OutliningRegions;
                },
                set: function (value) {
                    this.m_OutliningRegions = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceCount", "Codex$IBoundSourceInfo$ReferenceCount",
            "DefinitionCount", "Codex$IBoundSourceInfo$DefinitionCount",
            "Language", "Codex$IBoundSourceInfo$Language",
            "ExcludeFromSearch", "Codex$IBoundSourceInfo$ExcludeFromSearch"
        ],
        ctors: {
            init: function () {
                this.m_References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).ctor();
                this.m_Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceCount = value.Codex$IBoundSourceInfo$ReferenceCount;
                this.m_DefinitionCount = value.Codex$IBoundSourceInfo$DefinitionCount;
                this.m_Language = value.Codex$IBoundSourceInfo$Language;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$References).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f2));
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Definitions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f4));
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Classifications).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f6));
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$OutliningRegions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f8));
                this.m_ExcludeFromSearch = value.Codex$IBoundSourceInfo$ExcludeFromSearch;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            },
            CoerceReferenceCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : System.Array.getCount(this.References, Codex.ObjectModel.ReferenceSpan));
            },
            CoerceDefinitionCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : this.Definitions.Count);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferenceSpan, Bridge.global.Codex.ObjectModel.ReferenceSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.DefinitionSpan.ctor().CopyFrom$1(Codex.ObjectModel.DefinitionSpan, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSpan, Bridge.global.Codex.ObjectModel.DefinitionSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f3);
        },
        f5: function (_v) {
            return new Codex.ObjectModel.ClassificationSpan.ctor().CopyFrom$1(Codex.ObjectModel.ClassificationSpan, _v);
        },
        f6: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationSpan, Bridge.global.Codex.ObjectModel.ClassificationSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f5);
        },
        f7: function (_v) {
            return new Codex.ObjectModel.OutliningRegion.ctor().CopyFrom(Codex.ObjectModel.OutliningRegion, _v);
        },
        f8: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IOutliningRegion, Bridge.global.Codex.ObjectModel.OutliningRegion, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f7);
        }
    });

    /**
     * Describes a commit in version control
     *
     * @public
     * @class Codex.ObjectModel.Commit
     * @augments Codex.ObjectModel.CommitScopeEntity
     * @implements  Codex.ICommit
     */
    Bridge.define("Codex.ObjectModel.Commit", {
        inherits: [Codex.ObjectModel.CommitScopeEntity,Codex.ICommit],
        fields: {
            m_Description: null,
            m_DateUploaded: null,
            m_DateCommitted: null,
            m_ParentCommitIds: null,
            m_ChangedFiles: null
        },
        props: {
            /**
             * The commit description describing the changes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The date the commit was stored to the index
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateUploaded
             * @type System.DateTime
             */
            DateUploaded: {
                get: function () {
                    return this.m_DateUploaded;
                },
                set: function (value) {
                    this.m_DateUploaded = value;
                }
            },
            /**
             * The date of the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateCommitted
             * @type System.DateTime
             */
            DateCommitted: {
                get: function () {
                    return this.m_DateCommitted;
                },
                set: function (value) {
                    this.m_DateCommitted = value;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ParentCommitIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ParentCommitIds: {
                get: function () {
                    return this.ParentCommitIds;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ParentCommitIds
             * @type System.Collections.Generic.List$1
             */
            ParentCommitIds: {
                get: function () {
                    return this.m_ParentCommitIds;
                },
                set: function (value) {
                    this.m_ParentCommitIds = value;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ChangedFiles
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ChangedFiles: {
                get: function () {
                    return this.ChangedFiles;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ChangedFiles
             * @type System.Collections.Generic.List$1
             */
            ChangedFiles: {
                get: function () {
                    return this.m_ChangedFiles;
                },
                set: function (value) {
                    this.m_ChangedFiles = value;
                }
            }
        },
        alias: [
            "Description", "Codex$ICommit$Description",
            "DateUploaded", "Codex$ICommit$DateUploaded",
            "DateCommitted", "Codex$ICommit$DateCommitted"
        ],
        ctors: {
            init: function () {
                this.m_DateUploaded = System.DateTime.getDefaultValue();
                this.m_DateCommitted = System.DateTime.getDefaultValue();
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.Commit, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Description = value.Codex$ICommit$Description;
                this.m_DateUploaded = value.Codex$ICommit$DateUploaded;
                this.m_DateCommitted = value.Codex$ICommit$DateCommitted;
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$ICommit$ParentCommitIds);
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommit$ChangedFiles).select($asm.$.Codex.ObjectModel.Commit.f2));
                Codex.ObjectModel.CommitScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.CommitScopeEntity, Bridge.cast((value), Codex.ICommitScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Commit", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Commit, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitChangedFile.ctor().CopyFrom$1(Codex.ObjectModel.CommitChangedFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitChangedFile, Bridge.global.Codex.ObjectModel.CommitChangedFile, v, $asm.$.Codex.ObjectModel.Commit.f1);
        }
    });

    /**
     * Represents a directory in source control
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesDirectory
     * @augments Codex.ObjectModel.RepoFileScopeEntity
     * @implements  Codex.ICommitFilesDirectory
     */
    Bridge.define("Codex.ObjectModel.CommitFilesDirectory", {
        inherits: [Codex.ObjectModel.RepoFileScopeEntity,Codex.ICommitFilesDirectory],
        fields: {
            m_Files: null
        },
        props: {
            /**
             * The files in the directory
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Codex$ICommitFilesDirectory$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommitFilesDirectory$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * The files in the directory
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesDirectory, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesDirectory$Files).select($asm.$.Codex.ObjectModel.CommitFilesDirectory.f2));
                Codex.ObjectModel.RepoFileScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.RepoFileScopeEntity, Bridge.cast((value), Codex.IRepoFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesDirectory", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesDirectory, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesDirectory.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDefinitionSymbol],
        fields: {
            m_Uid: null,
            m_DisplayName: null,
            m_ShortName: null,
            m_ContainerQualifiedName: null,
            m_Modifiers: null,
            m_Glyph: 0,
            m_SymbolDepth: 0,
            m_DocumentationInfo: null,
            m_TypeName: null,
            m_DeclarationName: null,
            m_Comment: null
        },
        props: {
            /**
             * The unique identifier for the symbol
             NOTE: This is not applicable to most symbols. Only set for symbols
             which are added in a shared context and need this for deduplication)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Uid
             * @type string
             */
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * The display name of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The short name of the symbol (i.e. Task).
             This is used to find the symbol when search term does not contain '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ShortName
             * @type string
             */
            ShortName: {
                get: function () {
                    return this.CoerceShortName(this.m_ShortName);
                },
                set: function (value) {
                    this.m_ShortName = value;
                }
            },
            /**
             * The qualified name of the symbol (i.e. System.Threading.Tasks.Task).
             This is used to find the symbol when the search term contains '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ContainerQualifiedName
             * @type string
             */
            ContainerQualifiedName: {
                get: function () {
                    return this.m_ContainerQualifiedName;
                },
                set: function (value) {
                    this.m_ContainerQualifiedName = value;
                }
            },
            /**
             * Modifiers for the symbol such as public
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Modifiers
             * @type Array.<string>
             */
            Modifiers: {
                get: function () {
                    return this.m_Modifiers;
                },
                set: function (value) {
                    this.m_Modifiers = value;
                }
            },
            /**
             * The glyph
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Glyph
             * @type Codex.ObjectModel.Glyph
             */
            Glyph: {
                get: function () {
                    return this.m_Glyph;
                },
                set: function (value) {
                    this.m_Glyph = value;
                }
            },
            /**
             * The depth of the symbol in its symbolic tree
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function SymbolDepth
             * @type number
             */
            SymbolDepth: {
                get: function () {
                    return this.m_SymbolDepth;
                },
                set: function (value) {
                    this.m_SymbolDepth = value;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Codex$IDefinitionSymbol$DocumentationInfo
             * @type Codex.IDocumentationInfo
             */
            Codex$IDefinitionSymbol$DocumentationInfo: {
                get: function () {
                    return this.DocumentationInfo;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DocumentationInfo
             * @type Codex.ObjectModel.DocumentationInfo
             */
            DocumentationInfo: {
                get: function () {
                    return this.m_DocumentationInfo;
                },
                set: function (value) {
                    this.m_DocumentationInfo = value;
                }
            },
            /**
             * The name of the type for the symbol
             (i.e. return type of method)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function TypeName
             * @type string
             */
            TypeName: {
                get: function () {
                    return this.m_TypeName;
                },
                set: function (value) {
                    this.m_TypeName = value;
                }
            },
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$IDefinitionSymbol$Uid",
            "DisplayName", "Codex$IDefinitionSymbol$DisplayName",
            "ShortName", "Codex$IDefinitionSymbol$ShortName",
            "ContainerQualifiedName", "Codex$IDefinitionSymbol$ContainerQualifiedName",
            "Modifiers", "Codex$IDefinitionSymbol$Modifiers",
            "Glyph", "Codex$IDefinitionSymbol$Glyph",
            "SymbolDepth", "Codex$IDefinitionSymbol$SymbolDepth",
            "TypeName", "Codex$IDefinitionSymbol$TypeName",
            "DeclarationName", "Codex$IDefinitionSymbol$DeclarationName",
            "Comment", "Codex$IDefinitionSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Uid = value.Codex$IDefinitionSymbol$Uid;
                this.m_DisplayName = value.Codex$IDefinitionSymbol$DisplayName;
                this.m_ShortName = value.Codex$IDefinitionSymbol$ShortName;
                this.m_ContainerQualifiedName = value.Codex$IDefinitionSymbol$ContainerQualifiedName;
                this.m_Modifiers = value.Codex$IDefinitionSymbol$Modifiers;
                this.m_Glyph = value.Codex$IDefinitionSymbol$Glyph;
                this.m_SymbolDepth = value.Codex$IDefinitionSymbol$SymbolDepth;
                this.m_DocumentationInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationInfo, Bridge.global.Codex.ObjectModel.DocumentationInfo, this.DocumentationInfo, $asm.$.Codex.ObjectModel.DefinitionSymbol.f1);
                ;
                this.m_TypeName = value.Codex$IDefinitionSymbol$TypeName;
                this.m_DeclarationName = value.Codex$IDefinitionSymbol$DeclarationName;
                this.m_Comment = value.Codex$IDefinitionSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.ReferenceKind = "Definition";
                Codex.ObjectModel.ReferenceSymbol.prototype.Initialize.call(this);
            },
            CoerceShortName: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : "");
            },
            toString: function () {
                return this.DisplayName;
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSymbol", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSymbol, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationInfo.ctor().CopyFrom(Codex.ObjectModel.DocumentationInfo, v);
        }
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationReferenceSymbol
     * @augments Codex.ObjectModel.ReferenceSymbol
     * @implements  Codex.IDocumentationReferenceSymbol
     */
    Bridge.define("Codex.ObjectModel.DocumentationReferenceSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDocumentationReferenceSymbol],
        fields: {
            m_DisplayName: null,
            m_Comment: null
        },
        props: {
            /**
             * The display name of the symbol reference as it should appear in documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The comment associated with the reference
             (i.e. return type description https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/returns)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "DisplayName", "Codex$IDocumentationReferenceSymbol$DisplayName",
            "Comment", "Codex$IDocumentationReferenceSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_DisplayName = value.Codex$IDocumentationReferenceSymbol$DisplayName;
                this.m_Comment = value.Codex$IDocumentationReferenceSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterDefinitionSpan
     * @augments Codex.ObjectModel.LineSpan
     * @implements  Codex.IParameterDefinitionSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterDefinitionSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.IParameterDefinitionSpan],
        fields: {
            m_ParameterIndex: 0,
            m_Name: null
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            },
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "ParameterIndex", "Codex$IParameterDefinitionSpan$ParameterIndex",
            "Name", "Codex$IParameterDefinitionSpan$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterDefinitionSpan$ParameterIndex;
                this.m_Name = value.Codex$IParameterDefinitionSpan$Name;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.ITextLineSpan],
        fields: {
            m_LineSpanText: null
        },
        props: {
            /**
             * The line text
             TODO: It would be nice to not store this here and instead apply it as a join
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextLineSpan
             * @function LineSpanText
             * @type string
             */
            LineSpanText: {
                get: function () {
                    return this.m_LineSpanText;
                },
                set: function (value) {
                    this.m_LineSpanText = value;
                }
            }
        },
        alias: ["LineSpanText", "Codex$ITextLineSpan$LineSpanText"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextLineSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_LineSpanText = value.Codex$ITextLineSpan$LineSpanText;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @public
     * @class Codex.ObjectModel.ProjectFileLink
     * @augments Codex.ObjectModel.ProjectFileScopeEntity
     * @implements  Codex.IProjectFileLink
     */
    Bridge.define("Codex.ObjectModel.ProjectFileLink", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IProjectFileLink],
        fields: {
            m_FileId: null
        },
        props: {
            /**
             * Unique identifier for file
             TODO: Make this checksum and searchable and use for discovering commit from PDB.
             TODO: What is this?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            }
        },
        alias: ["FileId", "Codex$IProjectFileLink$FileId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ProjectFileLink, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_FileId = value.Codex$IProjectFileLink$FileId;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IReferenceSearchModel],
        fields: {
            m_Reference: null,
            m_Spans: null,
            m_CompressedSpans: null,
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The reference symbol
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Codex$IReferenceSearchModel$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSearchModel$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            Codex$IReferenceSearchModel$Spans: {
                get: function () {
                    return this.Spans;
                }
            },
            Spans: {
                get: function () {
                    return this.CoerceSpans(this.m_Spans);
                },
                set: function (value) {
                    this.m_Spans = value;
                }
            },
            /**
             * Compressed list of spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function CompressedSpans
             * @type Codex.ISymbolLineSpanList
             */
            CompressedSpans: {
                get: function () {
                    return this.m_CompressedSpans;
                },
                set: function (value) {
                    this.m_CompressedSpans = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "CompressedSpans", "Codex$IReferenceSearchModel$CompressedSpans",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            init: function () {
                this.m_Spans = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.SymbolSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$3: function (TTarget, value) {
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f1);
                ;
                this.m_Spans = new (System.Collections.Generic.List$1(Codex.ObjectModel.SymbolSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSearchModel$Spans).select($asm.$.Codex.ObjectModel.ReferenceSearchModel.f3));
                this.m_CompressedSpans = value.Codex$IReferenceSearchModel$CompressedSpans;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CoerceSpans: function (value) {
                var $t;
                value = value || (($t = this.CompressedSpans) != null ? $t.Codex$ISymbolLineSpanList$ToList() : null);
                this.Spans = value;
                return value;
            },
            OnSerializingCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.RemoveDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            },
            OnDeserializedCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.AssignDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.SymbolSpan.ctor().CopyFrom$3(Codex.ObjectModel.SymbolSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ISymbolSpan, Bridge.global.Codex.ObjectModel.SymbolSpan, v, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.IReferenceSearchResult],
        fields: {
            m_Reference: null
        },
        props: {
            Codex$Sdk$Search$IReferenceSearchResult$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSearchResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceFileInfo],
        fields: {
            m_Lines: 0,
            m_Size: 0,
            m_Language: null,
            m_WebAddress: null,
            m_Encoding: null,
            m_Properties: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_SourceControlContentId: null,
            m_ProjectRelativePath: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The number of lines in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Lines
             * @type number
             */
            Lines: {
                get: function () {
                    return this.m_Lines;
                },
                set: function (value) {
                    this.m_Lines = value;
                }
            },
            /**
             * The size of the file in bytes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Size
             * @type number
             */
            Size: {
                get: function () {
                    return this.m_Size;
                },
                set: function (value) {
                    this.m_Size = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * The web address of the file. TODO: Remove? Is repo relative path enough?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function WebAddress
             * @type string
             */
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Encoding
             * @type Codex.IEncodingDescription
             */
            Codex$ISourceFileInfo$Encoding: {
                get: function () {
                    return this.Encoding;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Encoding
             * @type Codex.ObjectModel.EncodingDescription
             */
            Encoding: {
                get: function () {
                    return this.m_Encoding;
                },
                set: function (value) {
                    this.m_Encoding = value;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Properties
             * @type Codex.IPropertyMap
             */
            Codex$ISourceFileInfo$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "Lines", "Codex$ISourceFileInfo$Lines",
            "Size", "Codex$ISourceFileInfo$Size",
            "Language", "Codex$ISourceFileInfo$Language",
            "WebAddress", "Codex$ISourceFileInfo$WebAddress",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$4(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.SourceFileInfo, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$5: function (TTarget, value) {
                this.m_Lines = value.Codex$ISourceFileInfo$Lines;
                this.m_Size = value.Codex$ISourceFileInfo$Size;
                this.m_Language = value.Codex$ISourceFileInfo$Language;
                this.m_WebAddress = value.Codex$ISourceFileInfo$WebAddress;
                this.m_Encoding = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.EncodingDescription, Bridge.global.Codex.ObjectModel.EncodingDescription, this.Encoding, $asm.$.Codex.ObjectModel.SourceFileInfo.f1);
                ;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.SourceFileInfo.f2);
                ;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_SourceControlContentId = Bridge.cast((value), Codex.ISourceControlFileInfo).Codex$ISourceControlFileInfo$SourceControlContentId;
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFileInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFileInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.EncodingDescription.ctor().CopyFrom(Codex.ObjectModel.EncodingDescription, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpanResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.ITextLineSpanResult],
        fields: {
            m_TextSpan: null
        },
        props: {
            Codex$Sdk$Search$ITextLineSpanResult$TextSpan: {
                get: function () {
                    return this.TextSpan;
                }
            },
            TextSpan: {
                get: function () {
                    return this.m_TextSpan;
                },
                set: function (value) {
                    this.m_TextSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_TextSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpan, Bridge.global.Codex.ObjectModel.TextLineSpan, this.TextSpan, $asm.$.Codex.ObjectModel.TextLineSpanResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextLineSpanResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextLineSpanResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpan.ctor().CopyFrom$2(Codex.ObjectModel.TextLineSpan, v);
        }
    });

    Bridge.define("Codex.View.GoToSpanCommandBinding", {
        inherits: [Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.ITextLineSpanResult)],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.ITextLineSpanResult).ctor.call(this, Codex.View.Commands.GoToSpan);
            }
        }
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @public
     * @class Codex.ObjectModel.BoundSourceFile
     * @augments Codex.ObjectModel.BoundSourceInfo
     * @implements  Codex.IBoundSourceFile
     */
    Bridge.define("Codex.ObjectModel.BoundSourceFile", {
        inherits: [Codex.ObjectModel.BoundSourceInfo,Codex.IBoundSourceFile],
        fields: {
            m_SourceFile: null
        },
        props: {
            /**
             * The source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function Codex$IBoundSourceFile$SourceFile
             * @type Codex.ISourceFile
             */
            Codex$IBoundSourceFile$SourceFile: {
                get: function () {
                    return this.SourceFile;
                }
            },
            /**
             * The source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function SourceFile
             * @type Codex.ObjectModel.SourceFile
             */
            SourceFile: {
                get: function () {
                    return this.m_SourceFile;
                },
                set: function (value) {
                    this.m_SourceFile = value;
                }
            }
        },
        alias: [
            "References", "Codex$IBoundSourceInfo$References",
            "Definitions", "Codex$IBoundSourceInfo$Definitions",
            "Classifications", "Codex$IBoundSourceInfo$Classifications",
            "OutliningRegions", "Codex$IBoundSourceInfo$OutliningRegions"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_SourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.SourceFile, $asm.$.Codex.ObjectModel.BoundSourceFile.f1);
                ;
                Codex.ObjectModel.BoundSourceInfo.prototype.CopyFrom$4.call(this, Codex.ObjectModel.BoundSourceInfo, Bridge.cast((value), Codex.IBoundSourceInfo));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolSpan", {
        inherits: [Codex.ObjectModel.TextLineSpan,Codex.ISymbolSpan],
        props: {
            LineSpanEnd: {
                get: function () {
                    return ((this.LineSpanStart + this.Length) | 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.SymbolSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor3.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                Codex.ObjectModel.TextLineSpan.prototype.CopyFrom$2.call(this, Codex.ObjectModel.TextLineSpan, Bridge.cast((value), Codex.ITextLineSpan));
                return Bridge.cast((this), TTarget);
            },
            Trim: function () {
                var initialLength = this.LineSpanText.length;
                this.LineSpanText = System.String.trimStart(this.LineSpanText);
                var newLength = this.LineSpanText.length;
                this.LineSpanStart = (this.LineSpanStart - (((initialLength - newLength) | 0))) | 0;
                this.LineSpanText = System.String.trimEnd(this.LineSpanText);
                this.LineSpanStart = Math.max(this.LineSpanStart, 0);
                this.Length = Math.min(this.LineSpanText.length, this.Length);
            },
            CreateReference: function (referenceSymbol, relatedDefinition) {
                var $t;
                if (relatedDefinition === void 0) { relatedDefinition = new Codex.ObjectModel.SymbolId(); }
                return ($t = new Codex.ObjectModel.ReferenceSpan.$ctor4(this), $t.RelatedDefinition = relatedDefinition, $t.Reference = referenceSymbol, $t);
            },
            CreateDefinition: function (definition) {
                var $t;
                return ($t = new Codex.ObjectModel.DefinitionSpan.$ctor2(this), $t.Definition = definition, $t);
            }
        }
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterReferenceSpan
     * @augments Codex.ObjectModel.SymbolSpan
     * @implements  Codex.IParameterReferenceSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IParameterReferenceSpan],
        fields: {
            m_ParameterIndex: 0
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterReferenceSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            }
        },
        alias: ["ParameterIndex", "Codex$IParameterReferenceSpan$ParameterIndex"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterReferenceSpan$ParameterIndex;
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IReferenceSpan],
        fields: {
            m_RelatedDefinition: null,
            m_Reference: null,
            m_Parameters: null
        },
        props: {
            /**
             * Gets the symbol id of the definition which provides this reference
             (i.e. method definition for interface implementation)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function RelatedDefinition
             * @type Codex.ObjectModel.SymbolId
             */
            RelatedDefinition: {
                get: function () {
                    return this.m_RelatedDefinition;
                },
                set: function (value) {
                    this.m_RelatedDefinition = value;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSpan$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferenceSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        alias: ["RelatedDefinition", "Codex$IReferenceSpan$RelatedDefinition"],
        ctors: {
            init: function () {
                this.m_RelatedDefinition = new Codex.ObjectModel.SymbolId();
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterReferenceSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_RelatedDefinition = value.Codex$IReferenceSpan$RelatedDefinition;
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSpan$Parameters).select($asm.$.Codex.ObjectModel.ReferenceSpan.f3));
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterReferenceSpan, Bridge.global.Codex.ObjectModel.ParameterReferenceSpan, v, $asm.$.Codex.ObjectModel.ReferenceSpan.f2);
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vLi4vQ29kZXguU2RrLlR5cGVzL1N1cHBvcnQvQXR0cmlidXRlcy5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9TdXBwb3J0L0RhdGFJbmNsdXNpb24uY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvRW50aXR5VXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9FbnRpdHlUeXBlcy5nLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9HbHlwaC5jcyIsIkNvbXBhdGliaWxpdHkvQ29tcGF0aWJpbGl0eS5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9BcGkvSUluZGV4LmNzIiwiLi4vLi4vQ29kZXguU2RrLlR5cGVzL0FwaS9JQ29kZXguY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU3VwcG9ydC9TZWFyY2hUeXBlRGVzY3JpcHRvcnMuY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU2VhcmNoVHlwZXMuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL1V0aWxpdGllcy9Db2xsZWN0aW9uVXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9VdGlsaXRpZXMvU2VyaWFsaXphdGlvblV0aWxpdGllcy5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0FwcC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1ZpZXdNb2RlbHMuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9Db21tYW5kcy5jcyIsIkVkaXRvckhvc3RDb250cm9sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvR3JhbnVsYXJFeHRlbnNpb25zLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvTGVmdFBhbmVWaWV3LnhhbWwuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9NYWluV2luZG93LnhhbWwuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9TdHlsZXMuY3MiLCJNb25hY28vRWRpdG9yLmNzIiwiTW9uYWNvL2xpYi9Nb25hY28uZC5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9FbnRpdHlCYXNlLmNzIiwiV2ViQXBpQ29kZXguY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFnRmtDQTs7Ozs7Z0JBRXRCQSx5QkFBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNyRE1BOzs7Z0JBRTFCQSxxQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQ3JCYUEsR0FBR0EsU0FBU0EsS0FBT0E7b0JBSWhEQSxJQUFJQSxPQUFPQTt3QkFBTUEsT0FBT0E7O29CQUN4QkEsT0FBT0EsS0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCRm1DbUJBOzs7Z0JBRS9CQSxZQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBMENhQTs7O2dCQUVwQkEscUJBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDRy9FcUZBOzs7OztvQkFHckdBLGtCQUE4RUEsS0FBSUE7b0JBQ2xGQSxnQkFBZ0JBLEFBQU9BLGVBQWdCQSxBQUFPQTtvQkFDOUNBLGdCQUFnQkEsQUFBT0EsMEJBQVNBLEFBQU9BO29CQUN2Q0EsZ0JBQWdCQSxBQUFPQSwwQkFBMkJBLEFBQU9BO29C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QUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFL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Q25EQSxtQkFBbUJBLG1JQUFnSEEsZ0JBQVdBLEFBQTRHQTtnQkFBMERBO2dCQUNwVEEsb0JBQW9CQSxLQUFJQSxvRkFBd0RBLDRCQUFzSEEsQUFBQ0EsQUFBc0JBLEFBQUNBLDhDQUFvQkEsQUFBK0dBO2dCQUNqV0EsMkZBQTBCQSxBQUFDQSxZQUFtQkEsQ0FBQ0E7Z0JBQy9DQSxPQUFPQSxBQUFDQSxZQUFTQSxDQUFDQTs7Ozs7Ozs7O21CQUg2T0EsSUFBSUEsdUZBQTRDQTs7O21CQUNrU0EsSUFBSUEscUdBQTBEQTs7O21CQUF6U0Esc0lBQW1IQSxHQUFHQSxBQUErR0EiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgU2VhcmNoRGVzY3JpcHRvcklubGluZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBib29sIElubGluZTtcclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaERlc2NyaXB0b3JJbmxpbmVBdHRyaWJ1dGUoYm9vbCBpbmxpbmUgPSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElubGluZSA9IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBFbnRpdHlJZEF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkNsYXNzLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUGxhY2Vob2xkZXJBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5DbGFzcywgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgVHlwZSBUeXBlO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZShUeXBlIHR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUeXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuSW50ZXJmYWNlLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgQWRhcHRlclR5cGVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5JbnRlcmZhY2UsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBHZW5lcmF0ZWRDbGFzc05hbWVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgc3RyaW5nIE5hbWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZW5lcmF0ZWRDbGFzc05hbWVBdHRyaWJ1dGUoc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZGljYXRlcyBhbiBhdHRhY2hlZCBwcm9wZXJ0eSB3aGljaCBpcyBub3QgaW50cmluc2ljIHRvIHRoZSBwYXJlbnQgb2JqZWN0IGFuZCBzaG91bGQgYmVcclxuICAgIC8vLyBleGNsdWRlZCB3aGVuIGNvbXB1dGluZyB0aGUgPHNlZSBjcmVmPVwiSVNlYXJjaEVudGl0eS5FbnRpdHlDb250ZW50SWRcIi8+XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBBdHRhY2hlZEF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgUXVlcnlBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFJlYWRPbmx5TGlzdEF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgQ29lcmNlR2V0QXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFR5cGUgQ29lcmNlZFNvdXJjZVR5cGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb2VyY2VHZXRBdHRyaWJ1dGUoVHlwZSBjb2VyY2VkU291cmNlVHlwZSA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb2VyY2VkU291cmNlVHlwZSA9IGNvZXJjZWRTb3VyY2VUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5kaWNhdGVzIHN0YWdlcyBmb3Igd2hpY2ggdGhlIGdpdmVuIHByb3BlcnR5IHNob3VsZCBiZSBpbmNsdWRlZFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgSW5jbHVkZUF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBPYmplY3RTdGFnZSBBbGxvd2VkU3RhZ2VzO1xyXG5cclxuICAgICAgICBwdWJsaWMgSW5jbHVkZUF0dHJpYnV0ZShPYmplY3RTdGFnZSBzdGFnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBbGxvd2VkU3RhZ2VzID0gc3RhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSB8IEF0dHJpYnV0ZVRhcmdldHMuSW50ZXJmYWNlIHwgQXR0cmlidXRlVGFyZ2V0cy5DbGFzcywgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFJlcXVpcmVkRm9yQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IE9iamVjdFN0YWdlIFN0YWdlcztcclxuXHJcbiAgICAgICAgcHVibGljIFJlcXVpcmVkRm9yQXR0cmlidXRlKE9iamVjdFN0YWdlIHN0YWdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0YWdlcyA9IHN0YWdlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gT2JqZWN0U3RhZ2VcclxuICAgIHtcclxuICAgICAgICBOb25lID0gMCxcclxuICAgICAgICBBbmFseXNpcyA9IDEsXHJcbiAgICAgICAgSW5kZXggPSAxIDw8IDEsXHJcbiAgICAgICAgU2VhcmNoID0gMSA8PCAyLFxyXG4gICAgICAgIEFsbCA9IFNlYXJjaCB8IEluZGV4IHwgQW5hbHlzaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBTZWFyY2hCZWhhdmlvclxyXG4gICAge1xyXG4gICAgICAgIE5vbmUsXHJcbiAgICAgICAgVGVybSxcclxuICAgICAgICBOb3JtYWxpemVkS2V5d29yZCxcclxuICAgICAgICBTb3J0d29yZCxcclxuICAgICAgICBIaWVyYXJjaGljYWxQYXRoLFxyXG4gICAgICAgIEZ1bGxUZXh0LFxyXG4gICAgICAgIFByZWZpeCxcclxuICAgICAgICBQcmVmaXhGdWxsTmFtZVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgU2VhcmNoQmVoYXZpb3JBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgU2VhcmNoQmVoYXZpb3IgQmVoYXZpb3I7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hCZWhhdmlvckF0dHJpYnV0ZShTZWFyY2hCZWhhdmlvciBiZWhhdmlvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJlaGF2aW9yID0gYmVoYXZpb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBlbnVtIERhdGFJbmNsdXNpb25PcHRpb25zXG4gICAge1xuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERhdGEgc2hvdWxkIGFsd2F5cyBiZSBpbmNsdWRlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgIE5vbmUgPSAwLFxuICAgICAgICBEZWZpbml0aW9ucyA9IDEsXG4gICAgICAgIFJlZmVyZW5jZXMgPSAxIDw8IDEsXG4gICAgICAgIENsYXNzaWZpY2F0aW9ucyA9IDEgPDwgMixcbiAgICAgICAgU2VhcmNoRGVmaW5pdGlvbnMgPSAxIDw8IDMsXG4gICAgICAgIFNlYXJjaFJlZmVyZW5jZXMgPSAxIDw8IDQsXG4gICAgICAgIENvbnRlbnQgPSAxIDw8IDUsXG4gICAgICAgIEFsbCA9IERlZmluaXRpb25zIHwgUmVmZXJlbmNlcyB8IENsYXNzaWZpY2F0aW9ucyB8IFNlYXJjaERlZmluaXRpb25zIHwgU2VhcmNoUmVmZXJlbmNlcyB8IENvbnRlbnQsXG5cbiAgICAgICAgLy8gRGVmYXVsdCBkb2VzIG5vdCBpbmNsdWRlIGRlZmluaXRpb25zIHNpbmNlIHRoZXkgY2FuIGJlIHF1ZXJpZWQgbGF6aWx5IHJhdGhlciB0aGFuIGVhZ2VybHkgcmV0cmlldmVkLlxuICAgICAgICBEZWZhdWx0ID0gUmVmZXJlbmNlcyB8IENsYXNzaWZpY2F0aW9ucyB8IFNlYXJjaERlZmluaXRpb25zIHwgU2VhcmNoUmVmZXJlbmNlcyB8IENvbnRlbnRcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBEYXRhSW5jbHVzaW9uQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IERhdGFJbmNsdXNpb25PcHRpb25zIERhdGFJbmNsdXNpb247XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhSW5jbHVzaW9uQXR0cmlidXRlKERhdGFJbmNsdXNpb25PcHRpb25zIGRhdGFJbmNsdXNpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRhSW5jbHVzaW9uID0gZGF0YUluY2x1c2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgRW50aXR5VXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUVGFyZ2V0IE51bGxPckNvcHk8VCwgVFRhcmdldD4oVCBvYmosIEZ1bmM8VCwgVFRhcmdldD4gY29weSlcclxuICAgICAgICAgICAgd2hlcmUgVCA6IGNsYXNzXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBjbGFzcywgVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcHkob2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGdlbmVyYXRlZCBieSBhIHRvb2wuXHJcbi8vICAgICBSdW50aW1lIFZlcnNpb246NC4wLjMwMzE5LjQyMDAwXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsIHtcclxuICAgIHVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbiAgICB1c2luZyBDb2RleC5GcmFtZXdvcmsuVHlwZXM7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZXhUeXBlVXRpbGl0aWVzIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlEaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4gc190eXBlTWFwcGluZ3MgPSBDcmVhdGVUeXBlTWFwcGluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPiBDcmVhdGVUeXBlTWFwcGluZygpIHtcclxuICAgICAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuRGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+IHR5cGVNYXBwaW5nID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPigpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXQpLCB0eXBlb2YoQ29tbWl0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0KSwgdHlwZW9mKENvZGV4LklDb21taXQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpLCB0eXBlb2YoQ29tbWl0Q2hhbmdlZEZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRDaGFuZ2VkRmlsZSksIHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZUxpbmspLCB0eXBlb2YoQ29tbWl0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRGaWxlTGluayksIHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQnJhbmNoKSwgdHlwZW9mKEJyYW5jaCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJyYW5jaCksIHR5cGVvZihDb2RleC5JQnJhbmNoKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlRmlsZSksIHR5cGVvZihCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUluZm8pLCB0eXBlb2YoQm91bmRTb3VyY2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VJbmZvKSwgdHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSwgdHlwZW9mKFNvdXJjZUNvbnRyb2xGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUNvbnRyb2xGaWxlSW5mbyksIHR5cGVvZihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSwgdHlwZW9mKFNvdXJjZUZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlRmlsZUluZm8pLCB0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pLCB0eXBlb2YoRW5jb2RpbmdEZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEVuY29kaW5nRGVzY3JpcHRpb24pLCB0eXBlb2YoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlRmlsZSksIHR5cGVvZihTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlRmlsZSksIHR5cGVvZihDb2RleC5JU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklPdXRsaW5pbmdSZWdpb24pLCB0eXBlb2YoT3V0bGluaW5nUmVnaW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoT3V0bGluaW5nUmVnaW9uKSwgdHlwZW9mKENvZGV4LklPdXRsaW5pbmdSZWdpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEZWZpbml0aW9uU3BhbiksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbiksIHR5cGVvZihSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU3BhbiksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKFBhcmFtZXRlclJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSwgdHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiksIHR5cGVvZihDbGFzc2lmaWNhdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDbGFzc2lmaWNhdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTeW1ib2xTcGFuKSwgdHlwZW9mKFN5bWJvbFNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTeW1ib2xTcGFuKSwgdHlwZW9mKENvZGV4LklTeW1ib2xTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVRleHRMaW5lU3BhbiksIHR5cGVvZihUZXh0TGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUZXh0TGluZVNwYW4pLCB0eXBlb2YoQ29kZXguSVRleHRMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklMaW5lU3BhbiksIHR5cGVvZihMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKExpbmVTcGFuKSwgdHlwZW9mKENvZGV4LklMaW5lU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTcGFuKSwgdHlwZW9mKFNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTcGFuKSwgdHlwZW9mKENvZGV4LklTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpLCB0eXBlb2YoQ29kZVJldmlldykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXcpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiksIHR5cGVvZihDb2RlUmV2aWV3SXRlcmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0l0ZXJhdGlvbiksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSwgdHlwZW9mKENvZGVSZXZpZXdlckluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3ZXJJbmZvKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSwgdHlwZW9mKENvZGVSZXZpZXdGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0ZpbGUpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSwgdHlwZW9mKENvZGVSZXZpZXdDb21tZW50VGhyZWFkKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSwgdHlwZW9mKENvZGVSZXZpZXdDb21tZW50KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld0NvbW1lbnQpLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUxhbmd1YWdlSW5mbyksIHR5cGVvZihMYW5ndWFnZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihMYW5ndWFnZUluZm8pLCB0eXBlb2YoQ29kZXguSUxhbmd1YWdlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSwgdHlwZW9mKENsYXNzaWZpY2F0aW9uU3R5bGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDbGFzc2lmaWNhdGlvblN0eWxlKSwgdHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3QpLCB0eXBlb2YoQW5hbHl6ZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQW5hbHl6ZWRQcm9qZWN0KSwgdHlwZW9mKENvZGV4LklQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSwgdHlwZW9mKFJlZmVyZW5jZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlZFByb2plY3QpLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluayksIHR5cGVvZihQcm9qZWN0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0RmlsZUxpbmspLCB0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluaykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyksIHR5cGVvZihEb2N1bWVudGF0aW9uSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERvY3VtZW50YXRpb25JbmZvKSwgdHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvcGVydHlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb3BlcnR5U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvcGVydHlNYXApLCB0eXBlb2YoUHJvcGVydHlNYXApKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9wZXJ0eU1hcCksIHR5cGVvZihDb2RleC5JUHJvcGVydHlNYXApKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeSksIHR5cGVvZihSZXBvc2l0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeSksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSwgdHlwZW9mKFJlcG9zaXRvcnlSZWZlcmVuY2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5UmVmZXJlbmNlKSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSksIHR5cGVvZihTZWFyY2hFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTZWFyY2hFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpLCB0eXBlb2YoUmVwb1Njb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb1Njb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29tbWl0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSwgdHlwZW9mKFByb2plY3RTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoUmVwb0ZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9GaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSksIHR5cGVvZihQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdEZpbGVTY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSwgdHlwZW9mKFJlZ2lzdGVyZWRFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWdpc3RlcmVkRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlciksIHR5cGVvZihTdG9yZWRGaWx0ZXIpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTdG9yZWRGaWx0ZXIpLCB0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlcikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpLCB0eXBlb2YoRGVmaW5pdGlvblNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCksIHR5cGVvZihMYW5ndWFnZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoTGFuZ3VhZ2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpLCB0eXBlb2YoU291cmNlU2VhcmNoTW9kZWxCYXNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU291cmNlU2VhcmNoTW9kZWxCYXNlKSwgdHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSwgdHlwZW9mKFJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnlTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCksIHR5cGVvZihQcm9qZWN0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29tbWl0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb21taXRTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCksIHR5cGVvZihDb21taXRGaWxlc1NlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcyksIHR5cGVvZihGaWxlU3RhdGlzdGljcykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEZpbGVTdGF0aXN0aWNzKSwgdHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvKSwgdHlwZW9mKFJlcG9zaXRvcnlTdG9yZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5U3RvcmVJbmZvKSwgdHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSwgdHlwZW9mKENvbW1pdEZpbGVzRGlyZWN0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZXNEaXJlY3RvcnkpLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSksIHR5cGVvZihTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTdG9yZWRCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSwgdHlwZW9mKERlZmluaXRpb25TeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEZWZpbml0aW9uU3ltYm9sKSwgdHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihSZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlU3ltYm9sKSwgdHlwZW9mKFN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFN5bWJvbCksIHR5cGVvZihDb2RleC5JQ29kZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCksIHR5cGVvZihSZWZlcmVuY2VTZWFyY2hSZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTZWFyY2hSZXN1bHQpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JUmVmZXJlbmNlU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0KSwgdHlwZW9mKFRleHRMaW5lU3BhblJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFRleHRMaW5lU3BhblJlc3VsdCksIHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQpLCB0eXBlb2YoU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU2VhcmNoUmVzdWx0KSwgdHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSwgdHlwZW9mKEluZGV4KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoSW5kZXgpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVNYXBwaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBhIGNvbW1pdCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0IDogQ29tbWl0U2NvcGVFbnRpdHksIENvZGV4LklDb21taXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlQ29tbWl0dGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IG1fUGFyZW50Q29tbWl0SWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4gbV9DaGFuZ2VkRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KENvZGV4LklDb21taXQgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGRlc2NyaXB0aW9uIGRlc2NyaWJpbmcgdGhlIGNoYW5nZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIHRoZSBjb21taXQgd2FzIHN0b3JlZCB0byB0aGUgaW5kZXhcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlVXBsb2FkZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlVXBsb2FkZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIG9mIHRoZSBjb21taXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlQ29tbWl0dGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGF0ZUNvbW1pdHRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVDb21taXR0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklDb21taXRTY29wZUVudGl0eS5Db21taXRJZFwiIC8+IG9mIHRoZSBwYXJlbnQgY29tbWl0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxzdHJpbmc+IENvZGV4LklDb21taXQuUGFyZW50Q29tbWl0SWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmVudENvbW1pdElkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklDb21taXRTY29wZUVudGl0eS5Db21taXRJZFwiIC8+IG9mIHRoZSBwYXJlbnQgY29tbWl0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IFBhcmVudENvbW1pdElkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmVudENvbW1pdElkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmVudENvbW1pdElkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGNoYW5nZWQgaW4gdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGU+IENvZGV4LklDb21taXQuQ2hhbmdlZEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNoYW5nZWRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBjaGFuZ2VkIGluIHRoZSBjb21taXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+IENoYW5nZWRGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NoYW5nZWRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NoYW5nZWRGaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGxvYWRlZCA9ICgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5EYXRlVXBsb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlQ29tbWl0dGVkID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRhdGVDb21taXR0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJlbnRDb21taXRJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5QYXJlbnRDb21taXRJZHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2hhbmdlZEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KCgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5DaGFuZ2VkRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4pKF92ID0+IG5ldyBDb21taXRDaGFuZ2VkRmlsZSgpLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxDb21taXRTY29wZUVudGl0eT4oKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGNoYW5nZWQgZmlsZSBpbiBhIGNvbW1pdFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdENoYW5nZWRGaWxlIDogQ29tbWl0RmlsZUxpbmssIENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5GaWxlQ2hhbmdlS2luZCBtX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdENoYW5nZWRGaWxlKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdENoYW5nZWRGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZShDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRm9yIGEgcmVuYW1lZCBmaWxlLCB0aGUgcGF0aCB0byB0aGUgZmlsZSBwcmlvciB0byB0aGUgcmVuYW1lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgT3JpZ2luYWxGaWxlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX09yaWdpbmFsRmlsZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbEZpbGVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRDaGFuZ2VkRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gKChDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKHZhbHVlKSkuQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsRmlsZVBhdGggPSAoKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkodmFsdWUpKS5PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXByZXNlbnRzIGEgdmVyc2lvbiBvZiBhIHJlcG9zaXRvcnkgZmlsZSBmb3IgYSBjb21taXRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlTGluayA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb21taXRGaWxlTGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVMaW5rKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlTGluayhDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlbGF0aXZlIHBhdGggaW4gdGhlIHJlcG9zaXRvcnkgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmZXIgZm9yIGZpbGUgY29udGVudCBhcyBkZXRlcm1pbmVkIGJ5IHZlcnNpb24gY29udHJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiB0aGUgYmxvYiBoYXNoKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFZlcnNpb25Db250cm9sRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVMaW5rIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZUxpbmsge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKS5GaWxlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLlZlcnNpb25Db250cm9sRmlsZUlkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGEgYnJhbmNoIGluIGEgcmVwb3NpdG9yeVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQnJhbmNoKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCcmFuY2ggOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQnJhbmNoIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0hlYWRDb21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQnJhbmNoKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCcmFuY2goQ29kZXguSUJyYW5jaCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208QnJhbmNoPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGJyYW5jaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBkZXNjcmlwdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhlYWQgY29tbWl0IG9mIHRoZSBicmFuY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBIZWFkQ29tbWl0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9IZWFkQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklCcmFuY2ggdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCcmFuY2gge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUJyYW5jaCkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkQ29tbWl0SWQgPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuSGVhZENvbW1pdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIHNvdXJjZSBmaWxlIHdpdGggYXNzb2NpYXRlZCBzZW1hbnRpYyBiaW5kaW5nc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZUZpbGUgOiBCb3VuZFNvdXJjZUluZm8sIENvZGV4LklCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX1NvdXJjZUZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JQm91bmRTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Qm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoQ29kZXguSUJvdW5kU291cmNlSW5mbyB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlIENvZGV4LklCb3VuZFNvdXJjZUZpbGUuU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlIFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VGaWxlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZT4oU291cmNlRmlsZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU+KSh2ID0+IG5ldyBTb3VyY2VGaWxlKCkuQ29weUZyb208U291cmNlRmlsZT4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQm91bmRTb3VyY2VJbmZvIDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguSUJvdW5kU291cmNlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX1JlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9EZWZpbml0aW9uQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MYW5ndWFnZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gbV9SZWZlcmVuY2VzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UmVmZXJlbmNlU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPiBtX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENsYXNzaWZpY2F0aW9uU3Bhbj4gbV9DbGFzc2lmaWNhdGlvbnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxDbGFzc2lmaWNhdGlvblNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IG1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKENvZGV4LklCb3VuZFNvdXJjZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlSW5mbyhDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBSZWZlcmVuY2VDb3VudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VSZWZlcmVuY2VDb3VudCh0aGlzLm1fUmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgZGVmaW5pdGlvbnMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBEZWZpbml0aW9uQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlRGVmaW5pdGlvbkNvdW50KHRoaXMubV9EZWZpbml0aW9uQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZWZlcmVuY2VTcGFuPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLlJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UmVmZXJlbmNlU3Bhbj4gUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbml0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE5vIG92ZXJsYXA/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEZWZpbml0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5EZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluaXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTm8gb3ZlcmxhcD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+IERlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNsYXNzaWZpY2F0aW9uU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xhc3NpZmljYXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZCBieSBzdGFydCBpbmRleC4gTm8gb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPiBDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JT3V0bGluaW5nUmVnaW9uPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLk91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuT3V0bGluaW5nUmVnaW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE91dGxpbmluZyByZWdpb25zIGZvciB0aGUgZG9jdW1lbnQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+IE91dGxpbmluZ1JlZ2lvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9PdXRsaW5pbmdSZWdpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGV4dCBzZWFyY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21TZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQm91bmRTb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZUNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbkNvdW50ID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkRlZmluaXRpb25Db3VudDtcclxuICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuUmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikoX3YgPT4gbmV3IFJlZmVyZW5jZVNwYW4oKS5Db3B5RnJvbTxSZWZlcmVuY2VTcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5EZWZpbml0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuPikoX3YgPT4gbmV3IERlZmluaXRpb25TcGFuKCkuQ29weUZyb208RGVmaW5pdGlvblNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5DbGFzc2lmaWNhdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4pKF92ID0+IG5ldyBDbGFzc2lmaWNhdGlvblNwYW4oKS5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuT3V0bGluaW5nUmVnaW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklPdXRsaW5pbmdSZWdpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPikoX3YgPT4gbmV3IE91dGxpbmluZ1JlZ2lvbigpLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGEgc291cmNlIGZpbGUgYXMgZGVmaW5lZCBieSB0aGUgc291cmNlIGNvbnRyb2wgcHJvdmlkZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlQ29udHJvbEZpbGVJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VDb250cm9sRmlsZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWQgZm9yIHRoZSBzb3VyY2UgZmlsZSBjb250ZW50IGFzIGRlZmluZWQgYnkgdGhlIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChpLmUuIGdpdCBTSEEpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbENvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlQ29udHJvbEZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSAoKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKHZhbHVlKSkuU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlRmlsZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9XZWJBZGRyZXNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRW5jb2RpbmdEZXNjcmlwdGlvbiBtX0VuY29kaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUHJvcGVydHlNYXAgbV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlRmlsZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgbGluZXMgaW4gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaXplIG9mIHRoZSBmaWxlIGluIGJ5dGVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU2l6ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogUmVtb3ZlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3Mgb2YgdGhlIGZpbGUuIFRPRE86IFJlbW92ZT8gSXMgcmVwbyByZWxhdGl2ZSBwYXRoIGVub3VnaD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBXZWJBZGRyZXNzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBlbmNvZGluZyB1c2VkIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24gQ29kZXguSVNvdXJjZUZpbGVJbmZvLkVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGVuY29kaW5nIHVzZWQgZm9yIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBFbmNvZGluZ0Rlc2NyaXB0aW9uIEVuY29kaW5nIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW5jb2Rpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbmNvZGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRXh0ZW5zaWJsZSBrZXkgdmFsdWUgcHJvcGVydGllcyBmb3IgdGhlIGRvY3VtZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVByb3BlcnR5TWFwIENvZGV4LklTb3VyY2VGaWxlSW5mby5Qcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBFeHRlbnNpYmxlIGtleSB2YWx1ZSBwcm9wZXJ0aWVzIGZvciB0aGUgZG9jdW1lbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBQcm9wZXJ0eU1hcCBQcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkIGZvciB0aGUgc291cmNlIGZpbGUgY29udGVudCBhcyBkZWZpbmVkIGJ5IHRoZSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAoaS5lLiBnaXQgU0hBKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNvdXJjZUNvbnRyb2xDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9ICgoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykodmFsdWUpKS5Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUZpbGVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZXMgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MaW5lcztcclxuICAgICAgICAgICAgdGhpcy5tX1NpemUgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5MYW5ndWFnZTtcclxuICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSAoKENvZGV4LklTb3VyY2VGaWxlSW5mbykodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW5jb2RpbmcgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uPihFbmNvZGluZywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24+KSh2ID0+IG5ldyBFbmNvZGluZ0Rlc2NyaXB0aW9uKCkuQ29weUZyb208RW5jb2RpbmdEZXNjcmlwdGlvbj4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPihQcm9wZXJ0aWVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPikodiA9PiBuZXcgUHJvcGVydHlNYXAoKS5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gKChDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBlbmNvZGluZyBzbyB0aGF0IGZpbGUgbWF5IGJlIHJlY29uc3RpdHV0ZWQgaW4gYSBieXRlLWlkZW50aWNhbCBmb3JtXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBFbmNvZGluZ0Rlc2NyaXB0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJ5dGVbXSBtX1ByZWFtYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBFbmNvZGluZ0Rlc2NyaXB0aW9uKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxFbmNvZGluZ0Rlc2NyaXB0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGVuY29kaW5nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZW5jb2RpbmcgcHJlYW1ibGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJ5dGVbXSBQcmVhbWJsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ByZWFtYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRW5jb2RpbmdEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJlYW1ibGUgPSAoKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSh2YWx1ZSkpLlByZWFtYmxlO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyB0ZXh0IGNvbnRlbnRzIG9mIGEgZmlsZSBhbmQgYXNzb2NpYXRlZCBkYXRhXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VGaWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZUluZm8gbV9JbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZShDb2RleC5JU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JU291cmNlRmlsZS5JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlSW5mbyBJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb250ZW50IG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29udGVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0ZXh0IHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPihJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gKChDb2RleC5JU291cmNlRmlsZSkodmFsdWUpKS5Db250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklTb3VyY2VGaWxlKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgT3V0bGluaW5nUmVnaW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGluZVNwYW4gbV9IZWFkZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIE91dGxpbmluZ1JlZ2lvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgT3V0bGluaW5nUmVnaW9uKENvZGV4LklPdXRsaW5pbmdSZWdpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPE91dGxpbmluZ1JlZ2lvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JT3V0bGluaW5nUmVnaW9uLkhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgaGVhZGVyIHRleHQgb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIEhlYWRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0hlYWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0hlYWRlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGNvbGxhcHNpYmxlIGNvbnRlbnQgcmVnaW9uIG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JTGluZVNwYW4gQ29kZXguSU91dGxpbmluZ1JlZ2lvbi5Db250ZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgY29sbGFwc2libGUgY29udGVudCByZWdpb24gb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIENvbnRlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IE91dGxpbmluZ1JlZ2lvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LaW5kID0gKChDb2RleC5JT3V0bGluaW5nUmVnaW9uKSh2YWx1ZSkpLktpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9IZWFkZXIgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KEhlYWRlciwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4pKHYgPT4gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4oQ29udGVudCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4pKHYgPT4gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEZWZpbml0aW9uU3BhbiA6IFNwYW4sIENvZGV4LklEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+IG1fUGFyYW1ldGVycyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3BhbihDb2RleC5JRGVmaW5pdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEZWZpbml0aW9uU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCBDb2RleC5JRGVmaW5pdGlvblNwYW4uRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgZGVmaW5pdGlvbnMgZm9yIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBDb2RleC5JRGVmaW5pdGlvblNwYW4uUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgZGVmaW5pdGlvbnMgZm9yIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+IFBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KERlZmluaXRpb24sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPigoKENvZGV4LklEZWZpbml0aW9uU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KShfdiA9PiBuZXcgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oKS5Db3B5RnJvbTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBIHNwZWNpYWxpemVkIGRlZmluaXRpb24gc3BhbiByZWZlcnJpbmcgdG8gYSBwYXJhbWV0ZXIgb2YgYSBtZXRob2QvcHJvcGVydHlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiA6IExpbmVTcGFuLCBDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRlZmluaXRpb25TcGFuKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlckRlZmluaXRpb25TcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5kZXggb2YgdGhlIHBhcmFtZXRlciBpbiB0aGUgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgbWV0aG9kXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgUGFyYW1ldGVySW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9ICgoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSh2YWx1ZSkpLlBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VTcGFuIDogU3ltYm9sU3BhbiwgQ29kZXguSVJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgbV9SZWxhdGVkRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZVN5bWJvbCBtX1JlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4gbV9QYXJhbWV0ZXJzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklSZWZlcmVuY2VTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSBzeW1ib2wgaWQgb2YgdGhlIGRlZmluaXRpb24gd2hpY2ggcHJvdmlkZXMgdGhpcyByZWZlcmVuY2VcclxuICAgICAgICAvLy8gKGkuZS4gbWV0aG9kIGRlZmluaXRpb24gZm9yIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIFJlbGF0ZWREZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWxhdGVkRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2wgcmVmZXJyZWQgdG8gYnkgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklSZWZlcmVuY2VTeW1ib2wgQ29kZXguSVJlZmVyZW5jZVNwYW4uUmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZWZlcmVuY2VTeW1ib2wgUmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSByZWZlcmVuY2VzIHRvIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4+IENvZGV4LklSZWZlcmVuY2VTcGFuLlBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIHJlZmVyZW5jZXMgdG8gcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPiBQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWxhdGVkRGVmaW5pdGlvbiA9ICgoQ29kZXguSVJlZmVyZW5jZVNwYW4pKHZhbHVlKSkuUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4oUmVmZXJlbmNlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBSZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4pKF92ID0+IG5ldyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKCkuQ29weUZyb208UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3ltYm9sU3Bhbj4oKChDb2RleC5JU3ltYm9sU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBIHNwZWNpYWxpemVkIHJlZmVyZW5jZSBzcGFuIHJlZmVycmluZyB0byBhIHBhcmFtZXRlciB0byBhIG1ldGhvZC9wcm9wZXJ0eVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiA6IFN5bWJvbFNwYW4sIENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZGV4IG9mIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3IgdGhlIG1ldGhvZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFBhcmFtZXRlckluZGV4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gKChDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2xTcGFuPigoKENvZGV4LklTeW1ib2xTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgYSBjbGFzc2lmaWVkIHNwYW4gb2YgdGV4dFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDbGFzc2lmaWNhdGlvblNwYW4gOiBTcGFuLCBDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q2xhc3NpZmljYXRpb25TcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmF1bHQgY2xhc3NpZmljYXRpb24gY29sb3IgZm9yIHRoZSBzcGFuLiBUaGlzIGlzIHVzZWQgZm9yXHJcbiAgICAgICAgLy8vIGNvbnRleHRzIHdoZXJlIGEgbWFwcGluZyBmcm9tIGNsYXNzaWZpY2F0aW9uIGlkIHRvIGNvbG9yIGlzIG5vdFxyXG4gICAgICAgIC8vLyBhdmFpbGFibGUuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3Ige1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY2xhc3NpZmljYXRpb24gaWRlbnRpZmllciBmb3IgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDbGFzc2lmaWNhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NsYXNzaWZpY2F0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIHRvIHRoZSBsb2NhbCBncm91cCBvZiBzcGFucyB3aGljaCByZWZlciB0byB0aGUgc2FtZSBjb21tb24gc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTG9jYWxHcm91cElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTG9jYWxHcm91cElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTG9jYWxHcm91cElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ2xhc3NpZmljYXRpb25TcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSh2YWx1ZSkpLkRlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb24gPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9Mb2NhbEdyb3VwSWQgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuTG9jYWxHcm91cElkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVN5bWJvbFNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN5bWJvbFNwYW4gOiBUZXh0TGluZVNwYW4sIENvZGV4LklTeW1ib2xTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTeW1ib2xTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTeW1ib2xTcGFuIHtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KCgoQ29kZXguSVRleHRMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVGV4dExpbmVTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0TGluZVNwYW4gOiBMaW5lU3BhbiwgQ29kZXguSVRleHRMaW5lU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VGV4dExpbmVTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsaW5lIHRleHRcclxuICAgICAgICAvLy8gVE9ETzogSXQgd291bGQgYmUgbmljZSB0byBub3Qgc3RvcmUgdGhpcyBoZXJlIGFuZCBpbnN0ZWFkIGFwcGx5IGl0IGFzIGEgam9pblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIExpbmVTcGFuVGV4dCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRMaW5lU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblRleHQgPSAoKENvZGV4LklUZXh0TGluZVNwYW4pKHZhbHVlKSkuTGluZVNwYW5UZXh0O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPExpbmVTcGFuPigoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGluZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExpbmVTcGFuIDogU3BhbiwgQ29kZXguSUxpbmVTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxpbnQ+IG1fTGluZUluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9MaW5lTnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZVNwYW5TdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xpbmVPZmZzZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExpbmVTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGluZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExpbmVTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSAwLWJhc2VkIGluZGV4IG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lSW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlTGluZUluZGV4KHRoaXMubV9MaW5lSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZUluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgMS1iYXNlZCBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZU51bWJlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VMaW5lTnVtYmVyKHRoaXMubV9MaW5lTnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVOdW1iZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIHNwYW4gc3RhcnRzIGluIHRoZSBsaW5lIHRleHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lU3BhblN0YXJ0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZVNwYW5TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElmIHBvc2l0aXZlLCB0aGUgb2Zmc2V0IG9mIHRoZSBsaW5lIHNwYW4gZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lXHJcbiAgICAgICAgLy8vIElmIG5lZ2F0aXZlLCB0aGUgb2Zmc2V0IG9mIHRoZSBsaW5lc3BhbiBmcm9tIHRoZSBlbmQgb2YgdGhlIG5leHQgbGluZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVPZmZzZXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZU9mZnNldCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGluZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZUluZGV4ID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZU51bWJlciA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVOdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblN0YXJ0ID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZVNwYW5TdGFydDtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVPZmZzZXQgPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lT2Zmc2V0O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNwYW4gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3BhbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBhYnNvbHV0ZSBjaGFyYWN0ZXIgb2Zmc2V0IG9mIHRoZSBzcGFuIHdpdGhpbiB0aGUgZG9jdW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsZW5ndGggb2YgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMZW5ndGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MZW5ndGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFydCA9ICgoQ29kZXguSVNwYW4pKHZhbHVlKSkuU3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9MZW5ndGggPSAoKENvZGV4LklTcGFuKSh2YWx1ZSkpLkxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXcge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1VybDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkNvZGVSZXZpZXdTdGF0dXMgbV9TdGF0dXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXcoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXcoQ29kZXguSUNvZGVSZXZpZXcgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXc+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVybCBmb3IgYWNjZXNzaW5nIGNvZGUgcmV2aWV3IGluIHNvdXJjZSBjb250cm9sIG1hbmFnZW1lbnQgKGkuZS4gR2l0SHViIG9yIFZTTylcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBVcmwge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VcmwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5Db2RlUmV2aWV3U3RhdHVzIFN0YXR1cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXR1cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXcgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3IHtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1VybCA9ICgoQ29kZXguSUNvZGVSZXZpZXcpKHZhbHVlKSkuVXJsO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhdHVzID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5TdGF0dXM7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0l0ZXJhdGlvbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0l0ZXJhdGlvbk51bWJlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Jldmlld0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdJdGVyYXRpb24oQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdJdGVyYXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEl0ZXJhdGlvbk51bWJlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0l0ZXJhdGlvbk51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0l0ZXJhdGlvbk51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXZpZXdJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Jldmlld0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmV2aWV3SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29kZVJldmlld0ZpbGU+IENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uLkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3SXRlcmF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX0l0ZXJhdGlvbk51bWJlciA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmV2aWV3SWQgPSAoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLlJldmlld0lkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4oKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5GaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPikoX3YgPT4gbmV3IENvZGVSZXZpZXdGaWxlKCkuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdlckluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3ZXJJbmZvKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3ZXJJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld2VySW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQ29kZVJldmlld2VySW5mbykodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3RmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3RmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkZpbGVDaGFuZ2VLaW5kIG1fQ2hhbmdlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0ZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdGaWxlKENvZGV4LklDb2RlUmV2aWV3RmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0ZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlyc3QgaXRlcmF0aW9uIGluIHdoaWNoIHRoaXMgZmlsZSBhcHBlYXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3RhcnRJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVsYXRpdmUgcGF0aCBpbiB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGUgaWQgb2YgdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZSBpZCBvZiB0aGUgYmFzZWxpbmUgdmVyc2lvbiBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEJhc2VsaW5lRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQmFzZWxpbmVGaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CYXNlbGluZUZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgY2hhbmdlIGFwcGxpZWQgdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkZpbGVDaGFuZ2VLaW5kIENoYW5nZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0ZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fQmFzZWxpbmVGaWxlSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX09yaWdpbmFsU3BhbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IG1fQ29tbWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50VGhyZWFkKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0NvbW1lbnRUaHJlYWQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3JpZ2luYWwgbG9jYXRpb24gZm9yIHRoZSBjb21tZW50IGluIHRoZSBvcmlnaW5hdGluZyBpdGVyYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQuT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk9yaWdpbmFsU3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvcmlnaW5hbCBsb2NhdGlvbiBmb3IgdGhlIGNvbW1lbnQgaW4gdGhlIG9yaWdpbmF0aW5nIGl0ZXJhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGluZVNwYW4gT3JpZ2luYWxTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3JpZ2luYWxTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaXRlcmF0aW9uIHdoZXJlIHRoZSBjb21tZW50IG9yaWdpbmF0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydEl0ZXJhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsYXN0IHRpZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIExhc3RVcGRhdGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYXN0VXBkYXRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb2RlUmV2aWV3Q29tbWVudD4gQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkLkNvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+IENvbW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0NvbW1lbnRUaHJlYWQge1xyXG4gICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxTcGFuID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPihPcmlnaW5hbFNwYW4sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KSh2ID0+IG5ldyBMaW5lU3BhbigpLkNvcHlGcm9tPExpbmVTcGFuPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9MYXN0VXBkYXRlZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLkxhc3RVcGRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdDb21tZW50LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KCgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLkNvbW1lbnRzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KShfdiA9PiBuZXcgQ29kZVJldmlld0NvbW1lbnQoKS5Db3B5RnJvbTxDb2RlUmV2aWV3Q29tbWVudD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdDb21tZW50IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdDb21tZW50IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1RleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXZpZXdlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkNvbW1lbnRJbXBvcnRhbmNlIG1fSW1wb3J0YW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0NvbW1lbnRUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnQoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3Q29tbWVudD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmV2aWV3ZXIgd2hpY2ggbWFkZSB0aGUgY29tbWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJldmlld2VyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmV2aWV3ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXZpZXdlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGltcG9ydGFuY2Ugb2YgdGhlIGNvbW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkNvbW1lbnRJbXBvcnRhbmNlIEltcG9ydGFuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JbXBvcnRhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSW1wb3J0YW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgd2hlbiB0aGUgY29tbWVudCB3YXMgc3VibWl0dGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgQ29tbWVudFRpbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50VGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRUaW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0NvbW1lbnQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3Q29tbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0ID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5tX1Jldmlld2VyID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuUmV2aWV3ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbXBvcnRhbmNlID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuSW1wb3J0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRUaW1lID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQpKHZhbHVlKSkuQ29tbWVudFRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMYW5ndWFnZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JTGFuZ3VhZ2VJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+IG1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZUluZm8oQ29kZXguSUxhbmd1YWdlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGFuZ3VhZ2VJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN0eWxlIGZvciBjbGFzc2lmaWVkIHNwYW5zLiBTZWUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQm91bmRTb3VyY2VJbmZvLkNsYXNzaWZpY2F0aW9uc1wiIC8+LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZT4gQ29kZXguSUxhbmd1YWdlSW5mby5DbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSBzdHlsZSBmb3IgY2xhc3NpZmllZCBzcGFucy4gU2VlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnNcIiAvPi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4gQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JTGFuZ3VhZ2VJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGFuZ3VhZ2VJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklMYW5ndWFnZUluZm8pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPigoKENvZGV4LklMYW5ndWFnZUluZm8pKHZhbHVlKSkuQ2xhc3NpZmljYXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KShfdiA9PiBuZXcgQ2xhc3NpZmljYXRpb25TdHlsZSgpLkNvcHlGcm9tPENsYXNzaWZpY2F0aW9uU3R5bGU+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIHN0eWxpbmcgZm9yIGEgZ2l2ZW4gY2xhc3NpZmljYXRpb25cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENsYXNzaWZpY2F0aW9uU3R5bGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9Db2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9JdGFsaWM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblN0eWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblN0eWxlKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblN0eWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmF1bHQgY2xhc3NpZmljYXRpb24gY29sb3IgZm9yIHRoZSBjbGFzc2lmaWNhdGlvbi4gVGhpcyBpcyB1c2VkIGZvclxyXG4gICAgICAgIC8vLyBjb250ZXh0cyB3aGVyZSBhIG1hcHBpbmcgZnJvbSBjbGFzc2lmaWNhdGlvbiBpZCB0byBjb2xvciBpcyBub3RcclxuICAgICAgICAvLy8gYXZhaWxhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IENvbG9yIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwYW5zIGNsYXNzaWZpZWQgd2l0aCB0aGlzIGNsYXNzaWZpY2F0aW9uIHNob3VsZCBoYXZlIGl0YWxpYyBmb250IGJ5IGRlZmF1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXRhbGljIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXRhbGljID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ2xhc3NpZmljYXRpb25TdHlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db2xvciA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKHZhbHVlKSkuQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9JdGFsaWMgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLkl0YWxpYztcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQW5hbHl6ZWRQcm9qZWN0IDogUHJvamVjdFNjb3BlRW50aXR5LCBDb2RleC5JUHJvamVjdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0S2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4gbV9Qcm9qZWN0UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoQ29kZXguSVByb2plY3QgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxBbmFseXplZFByb2plY3Q+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3Qga2luZCAoc2VlIDxzZWUgY3JlZj1cIlQ6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEtpbmRcIiAvPilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0S2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdEtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgdG8gZmlsZXMgaW4gdGhlIHByb2plY3RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVByb2plY3RGaWxlTGluaz4gQ29kZXguSVByb2plY3QuRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIHRvIGZpbGVzIGluIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4gRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmlwdGlvbnMgb2YgcmVmZXJlbmNlZCBwcm9qZWN0cyBhbmQgdXNlZCBkZWZpbml0aW9ucyBmcm9tIHRoZSBwcm9qZWN0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUmVmZXJlbmNlZFByb2plY3Q+IENvZGV4LklQcm9qZWN0LlByb2plY3RSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3RSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpcHRpb25zIG9mIHJlZmVyZW5jZWQgcHJvamVjdHMgYW5kIHVzZWQgZGVmaW5pdGlvbnMgZnJvbSB0aGUgcHJvamVjdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+IFByb2plY3RSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3QgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBBbmFseXplZFByb2plY3Qge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdEtpbmQgPSAoKENvZGV4LklQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RLaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4oKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5GaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPikoX3YgPT4gbmV3IFByb2plY3RGaWxlTGluaygpLkNvcHlGcm9tPFByb2plY3RGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0PigoKENvZGV4LklQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RSZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KShfdiA9PiBuZXcgUmVmZXJlbmNlZFByb2plY3QoKS5Db3B5RnJvbTxSZWZlcmVuY2VkUHJvamVjdD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UHJvamVjdFNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VkUHJvamVjdCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+IG1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3ltYm9sPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBQcm9wZXJ0eU1hcCBtX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZWRQcm9qZWN0KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VkUHJvamVjdChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlZmVyZW5jZWQgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXNlZCBkZWZpbml0aW9ucyBmb3IgdGhlIHByb2plY3QuIFNvcnRlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSURlZmluaXRpb25TeW1ib2w+IENvZGV4LklSZWZlcmVuY2VkUHJvamVjdC5EZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZWQgZGVmaW5pdGlvbnMgZm9yIHRoZSBwcm9qZWN0LiBTb3J0ZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+IERlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERpc3BsYXlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHByb2plY3QuIFN1Y2ggYXMgVmVyc2lvbiwgUHVibGljS2V5LCBldGMuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUHJvcGVydHlNYXAgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LlByb3BlcnRpZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm9qZWN0LiBTdWNoIGFzIFZlcnNpb24sIFB1YmxpY0tleSwgZXRjLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUHJvcGVydHlNYXAgUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VkUHJvamVjdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5EZWZpbml0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikoX3YgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKHZhbHVlKSkuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPihQcm9wZXJ0aWVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwPikodiA9PiBuZXcgUHJvcGVydHlNYXAoKS5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBOT1RFOiBEbyBub3Qgc2V0IDxzZWUgY3JlZj1cIlA6Q29kZXguSVJlcG9TY29wZUVudGl0eS5SZXBvc2l0b3J5TmFtZVwiIC8+XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RGaWxlTGluayA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHksIENvZGV4LklQcm9qZWN0RmlsZUxpbmsge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoQ29kZXguSVByb2plY3RGaWxlTGluayB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlTGluaz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVMaW5rKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBmaWxlXHJcbiAgICAgICAgLy8vIFRPRE86IE1ha2UgdGhpcyBjaGVja3N1bSBhbmQgc2VhcmNoYWJsZSBhbmQgdXNlIGZvciBkaXNjb3ZlcmluZyBjb21taXQgZnJvbSBQREIuXHJcbiAgICAgICAgLy8vIFRPRE86IFdoYXQgaXMgdGhpcz9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZUxpbmsgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZUxpbmsge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JUHJvamVjdEZpbGVMaW5rKSh2YWx1ZSkpLkZpbGVJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgZG9jdW1lbnRhdGlvbiBhYm91dCBhIHN5bWJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERvY3VtZW50YXRpb25JbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeW1ib2wgbV9Bc3NvY2lhdGVkU3ltYm9sO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPiBtX1JlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU3VtbWFyeTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlbWFya3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9Bcmd1bWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+IG1fVHlwZVBhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IG1fRXhjZXB0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25JbmZvKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RG9jdW1lbnRhdGlvbkluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVjbGFyYXRpb24gbmFtZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlY2xhcmF0aW9uTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXBwbGllZCB0byB0aGUgZGVmaW5pdGlvbiAodGhpcyBpcyB0aGUgcmF3IGRvYyBjb21tZW50IHRleHQpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZGVudGl0eSBvZiBzeW1ib2wgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgZG9jdW1lbnRhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvZGVTeW1ib2wgQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkFzc29jaWF0ZWRTeW1ib2wge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQXNzb2NpYXRlZFN5bWJvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElkZW50aXR5IG9mIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeW1ib2wgQXNzb2NpYXRlZFN5bWJvbCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Fzc29jaWF0ZWRTeW1ib2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Bc3NvY2lhdGVkU3ltYm9sID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3RoZXIgc3ltYm9scyByZWZlcmVuY2VkIGJ5IHRoaXMgc3ltYm9sIChpLmUuIGJhc2UgdHlwZSwgaW1wbGVtZW50ZWQgaW50ZXJmYWNlXHJcbiAgICAgICAgLy8vIG9yIGludGVyZmFjZSBtZW1iZXJzLCBvdmVycmlkZGVuIG1lbWJlcnMsIHJldHVybiB0eXBlIG9mIG1ldGhvZCBvciBwcm9wZXJ0eSB0eXBlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLlJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvdGhlciBzeW1ib2xzIHJlZmVyZW5jZWQgYnkgdGhpcyBzeW1ib2wgKGkuZS4gYmFzZSB0eXBlLCBpbXBsZW1lbnRlZCBpbnRlcmZhY2VcclxuICAgICAgICAvLy8gb3IgaW50ZXJmYWNlIG1lbWJlcnMsIG92ZXJyaWRkZW4gbWVtYmVycywgcmV0dXJuIHR5cGUgb2YgbWV0aG9kIG9yIHByb3BlcnR5IHR5cGUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+IFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTdW1tYXJ5IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3VtbWFyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N1bW1hcnkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFN1cHBsZW1lbnRhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVtYXJrcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlbWFya3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZW1hcmtzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiBhcmd1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkFyZ3VtZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiBhcmd1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBBcmd1bWVudHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Bcmd1bWVudHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIHR5cGUgcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLlR5cGVQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlR5cGVQYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gdHlwZSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+IFR5cGVQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVHlwZVBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UeXBlUGFyYW1ldGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgZXhjZXB0aW9ucyB3aGljaCBjYW4gYmUgdGhyb3duXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5FeGNlcHRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkV4Y2VwdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCBleGNlcHRpb25zIHdoaWNoIGNhbiBiZSB0aHJvd25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBFeGNlcHRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjZXB0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2VwdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkRlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fQXNzb2NpYXRlZFN5bWJvbCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sPihBc3NvY2lhdGVkU3ltYm9sLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2w+KSh2ID0+IG5ldyBTeW1ib2woKS5Db3B5RnJvbTxTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5SZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KShfdiA9PiBuZXcgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3VtbWFyeSA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlN1bW1hcnk7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZW1hcmtzID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuUmVtYXJrcztcclxuICAgICAgICAgICAgdGhpcy5tX0FyZ3VtZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5Bcmd1bWVudHMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fVHlwZVBhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuVHlwZVBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNlcHRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkV4Y2VwdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKF92ID0+IG5ldyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgYSBtZXRob2QgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdHlwZWQgcGFyYW1ldGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA6IFBhcmFtZXRlckRvY3VtZW50YXRpb24sIENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCBtX1R5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbi5UeXBlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIFR5cGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UeXBlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oVHlwZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKCkuQ29weUZyb208RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWNyaWJlcyBhIHN5bWJvbCByZWxhdGVkIHRvIGEgZ2l2ZW4gZG9jdW1lbnRlZCBzeW1ib2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgOiBSZWZlcmVuY2VTeW1ib2wsIENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHN5bWJvbCByZWZlcmVuY2UgYXMgaXQgc2hvdWxkIGFwcGVhciBpbiBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZmVyZW5jZVxyXG4gICAgICAgIC8vLyAoaS5lLiByZXR1cm4gdHlwZSBkZXNjcmlwdGlvbiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL3Byb2dyYW1taW5nLWd1aWRlL3htbGRvYy9yZXR1cm5zKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gKChDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPigoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb3BlcnR5U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0tleTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fT3duZXJJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5U2VhcmNoTW9kZWwoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9wZXJ0eVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGtleSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLZXkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBWYWx1ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBvYmplY3Qgb3duaW5nIHRoaXMgcHJvcGVydHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBPd25lcklkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3duZXJJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9LZXkgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLktleTtcclxuICAgICAgICAgICAgdGhpcy5tX1ZhbHVlID0gKChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkodmFsdWUpKS5WYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tX093bmVySWQgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLk93bmVySWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9wZXJ0eU1hcCA6IENvZGV4LklQcm9wZXJ0eU1hcCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5TWFwKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eU1hcChDb2RleC5JUHJvcGVydHlNYXAgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb3BlcnR5TWFwPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb3BlcnR5TWFwIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvcGVydHlNYXAge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ByaW1hcnlCcmFuY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IG1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5KENvZGV4LklSZXBvc2l0b3J5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgZm8gdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgV2ViQWRkcmVzcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgd2ViIGFkZHJlc3MgZm9yIHNvdXJjZSBjb250cm9sIG9mIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbFdlYkFkZHJlc3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVnZXggZm9yIGV4dHJhY3RpbmdcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBwcmltYXJ5IGJyYW5jaCBmb3IgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcmltYXJ5QnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJpbWFyeUJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ByaW1hcnlCcmFuY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlPiBDb2RleC5JUmVwb3NpdG9yeS5SZXBvc2l0b3J5UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+IFJlcG9zaXRvcnlSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5UmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbFdlYkFkZHJlc3MgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xXZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4ID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9QcmltYXJ5QnJhbmNoID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5QcmltYXJ5QnJhbmNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4oKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5SZXBvc2l0b3J5UmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPikoX3YgPT4gbmV3IFJlcG9zaXRvcnlSZWZlcmVuY2UoKS5Db3B5RnJvbTxSZXBvc2l0b3J5UmVmZXJlbmNlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZXBvc2l0b3J5UmVmZXJlbmNlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5UmVmZXJlbmNlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5UmVmZXJlbmNlKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5UmVmZXJlbmNlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPcHRpb25hbC4gSWQgb2YgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5UmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBNYXJrZXIgaW50ZXJmYWNlIGZvciBzZWFyY2hhYmxlIGVudGl0aWVzXHJcbiAgICAvLy8gVE9ETzogQ29uc2lkZXIgbW92aW5nIDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5FbnRpdHlDb250ZW50SWRcIiAvPiBvdXQgaWYgaXRzIG5vdCBuZWVkZWQgYnkgYWxsIHNlYXJjaGFibGUgZW50aXRpZXNcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNlYXJjaEVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU2VhcmNoRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNlYXJjaEVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9VaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9FbnRpdHlDb250ZW50U2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxsb25nPiBtX0VudGl0eVZlcnNpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBsb25nIG1fU2hhcmRTdGFibGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hFbnRpdHkoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U2VhcmNoRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBVaWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9VaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VaWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIGNvbnRlbnQgYWRkcmVzc2FibGUgaWRlbnRpZmllciBmb3IgdGhlIGVudGl0eS4gVGhpcyBpcyB1c2VkXHJcbiAgICAgICAgLy8vIHRvIGRldGVybWluZSBpZiBhbiBlbnRpdHkgd2l0aCB0aGUgc2FtZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuVWlkXCIgLz4gc2hvdWxkIGJlIHVwZGF0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBFbnRpdHlDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHNpemUgb2YgdGhlIHJhdyBzZXJpYWxpemVkIGVudGl0eS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBFbnRpdHlDb250ZW50U2l6ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudFNpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB2ZXJzaW9uIG51bWJlciB1c2VkIHdoZW4gc3RvcmluZyB0aGUgZW50aXR5IChmb3IgdXNlIGJ5IEVsYXN0aWNTZWFyY2ggY29uY3VycmVuY3kgY29udHJvbFxyXG4gICAgICAgIC8vLyB0byBwcmV2ZW50IHJhY2VzIHdoZW4gc3RvcmluZyB2YWx1ZXMpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uTnVsbGFibGU8bG9uZz4gRW50aXR5VmVyc2lvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eVZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlWZXJzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcGVyLXNoYXJkIHN0YWJsZSBpZGVudGl0eSAoZGVyaXZlZCBmcm9tIEVsYXN0aWNTZWFyY2ggc2VxdWVuY2UgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgbG9uZyBTaGFyZFN0YWJsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU2hhcmRTdGFibGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NoYXJkU3RhYmxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTZWFyY2hFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fVWlkID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLlVpZDtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRJZCA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50U2l6ZSA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlDb250ZW50U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eVZlcnNpb24gPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuRW50aXR5VmVyc2lvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1NoYXJkU3RhYmxlSWQgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuU2hhcmRTdGFibGVJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9TY29wZUVudGl0eSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9TY29wZUVudGl0eSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb1Njb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9TY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0U2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklDb21taXRTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eShDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY29tbWl0L2NoYW5nZXNldCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gZ2l0IGNvbW1pdCBoYXNoIG9yIFRGUyBjaGFuZ2VzZXQgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KCgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0U2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb1Njb3BlRW50aXR5PigoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9GaWxlU2NvcGVFbnRpdHkgOiBSZXBvU2NvcGVFbnRpdHksIENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9GaWxlU2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvRmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb0ZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb0ZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb0ZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4oKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvamVjdCByZWxhdGl2ZSBwYXRoIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdFJlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwbyByZWxhdGl2ZSBwYXRoIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbiBvcmRlciB0byBjb21wdXRlIGEgc3RhYmxlIGludGVncmFsIGlkIGZvciBlYWNoIGVudGl0eS4gVGhpcyB0eXBlIGlzIHVzZWQgdG8gc3RvcmUgaW50byBhICdmb2xsb3cnIGluZGV4IHdoaWNoXHJcbiAgICAvLy8gc3RvcmVzIGVudGl0aWVzIG9mIHRoaXMgdHlwZSB1c2luZyB0aGUgPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LlVpZFwiIC8+IG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlYXJjaCBlbnRpdHkuIFRoZW4gdGhlXHJcbiAgICAvLy8gc2VxdWVuY2UgbnVtYmVyIGFzc2lnbmVkIGJ5IEVsYXN0aWNTZWFyY2ggaXMgdXNlZCBhcyB0aGUgc2hhcmQgc3RhYmxlIGlkICg8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuU2hhcmRTdGFibGVJZFwiIC8+KVxyXG4gICAgLy8vIGZvciB0aGUgZW50aXR5LiBUaGlzIGFwcHJvYWNoIGlzIHVzZWQgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHN0YWJsZSBpZCBhcHBlYXJzIGFzIGFuIGV4cGxpY2l0IGZpZWxkIGluIHRoZSBkb2N1bWVudCByYXRoZXJcclxuICAgIC8vLyB3aGljaCBhbGxvd3MgY29uZmlndXJhdGlvbiBvZiBob3cgdGhlIGZpZWxkIGlzIGluZGV4ZWQgKG5vdCB0cnVlIGZvciBzZXF1ZW5jZSBudW1iZXIgZmllbGQgd2l0aG91dCBjb2RlIGNoYW5nZXMgdG8gRVMpLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVnaXN0ZXJlZEVudGl0eSA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZUFkZGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlcmVkRW50aXR5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJlZEVudGl0eShDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZ2lzdGVyZWRFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFbnRpdHkoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGF0ZSBpbiB3aGljaCB0aGUgZW50aXR5IHdhcyByZWdpc3RlcmVkIChpLmUuIGFkZGVkIHRvIHRoZSBzdG9yZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlQWRkZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlQWRkZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlQWRkZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWdpc3RlcmVkRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVnaXN0ZXJlZEVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlQWRkZWQgPSAoKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSh2YWx1ZSkpLkRhdGVBZGRlZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIGEgc3RvcmVkIGZpbHRlciB3aGljaCBtYXRjaGVzIGVudGl0aWVzIGluIGEgcGFydGljdWxhciBpbmRleCBzaGFyZCBpbiBhIHN0YWJsZSBtYW5uZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVN0b3JlZEZpbHRlcikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3RvcmVkRmlsdGVyIDogU2VhcmNoRW50aXR5LCBDb2RleC5JU3RvcmVkRmlsdGVyIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVVcGRhdGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSW5kZXhOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU2hhcmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+IG1fU3RhYmxlSWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBtX0Jhc2VVaWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+IG1fVW5pb25GaWx0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYnl0ZVtdIG1fRmlsdGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsdGVySGFzaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0ZpbHRlckNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoQ29kZXguSVN0b3JlZEZpbHRlciB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN0b3JlZEZpbHRlcj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkRmlsdGVyKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgb2YgdGhlIGxhc3QgdXBkYXRlIHRvIHRoZSBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgRGF0ZVVwZGF0ZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlVXBkYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGRhdGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgaW5kZXggdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEluZGV4TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0luZGV4TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0luZGV4TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNoYXJkIHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTaGFyZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NoYXJkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hhcmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RhYmxlIGlkcyB0byBpbmNsdWRlIGluIHRoZSBzdG9yZWQgZmlsdGVyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxsb25nPiBDb2RleC5JU3RvcmVkRmlsdGVyLlN0YWJsZUlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TdGFibGVJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4gU3RhYmxlSWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhYmxlSWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhYmxlSWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHVpZHMgdG8gZm9yIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PHN0cmluZz4gQ29kZXguSVN0b3JlZEZpbHRlci5CYXNlVWlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYXNlVWlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBCYXNlVWlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Jhc2VVaWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmFzZVVpZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Ynl0ZVtdPiBDb2RleC5JU3RvcmVkRmlsdGVyLlVuaW9uRmlsdGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5VbmlvbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4gVW5pb25GaWx0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVW5pb25GaWx0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVW5pb25GaWx0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3RvcmVkIGZpbHRlciBiaXQgc2V0IHdoaWNoIG1hdGNoZXMgdGhlIHN0b3JlZCBmaWx0ZXIgZG9jdW1lbnRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBieXRlW10gRmlsdGVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsdGVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaGFzaCBvZiA8c2VlIGNyZWY9XCJQOkNvZGV4LklTdG9yZWRGaWx0ZXIuRmlsdGVyXCIgLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWx0ZXJIYXNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVySGFzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckhhc2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb3VudCBvZiBlbGVtZW50cyBtYXRjaGVkIGJ5IDxzZWUgY3JlZj1cIlA6Q29kZXguSVN0b3JlZEZpbHRlci5GaWx0ZXJcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEZpbHRlckNvdW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWx0ZXJDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN0b3JlZEZpbHRlciB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN0b3JlZEZpbHRlciB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlVXBkYXRlZCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5EYXRlVXBkYXRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0luZGV4TmFtZSA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5JbmRleE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9TaGFyZCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5TaGFyZDtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YWJsZUlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5TdGFibGVJZHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQmFzZVVpZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5CYXNlVWlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9VbmlvbkZpbHRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+KCgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5VbmlvbkZpbHRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVyID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkZpbHRlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckhhc2ggPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVySGFzaDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckNvdW50ID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkZpbHRlckNvdW50O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERlZmluaXRpb25TZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBtX0tleXdvcmRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwuRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxzdHJpbmc+IENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwuS2V5d29yZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuS2V5d29yZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IEtleXdvcmRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2V5d29yZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LZXl3b3JkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4oRGVmaW5pdGlvbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9LZXl3b3JkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSh2YWx1ZSkpLktleXdvcmRzKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGFuZ3VhZ2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGFuZ3VhZ2VJbmZvIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZVNlYXJjaE1vZGVsKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208TGFuZ3VhZ2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JTGFuZ3VhZ2VJbmZvIENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsLkxhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExhbmd1YWdlSW5mbyBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogTGFuZ3VhZ2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvPihMYW5ndWFnZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvPikodiA9PiBuZXcgTGFuZ3VhZ2VJbmZvKCkuQ29weUZyb208TGFuZ3VhZ2VJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUmVmZXJlbmNlU3ltYm9sIG1fUmVmZXJlbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxTeW1ib2xTcGFuPiBtX1NwYW5zID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8U3ltYm9sU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JU3ltYm9sTGluZVNwYW5MaXN0IG1fQ29tcHJlc3NlZFNwYW5zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklSZWZlcmVuY2VTeW1ib2wgQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsLlJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUmVmZXJlbmNlU3ltYm9sIFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVN5bWJvbFNwYW4+IENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbC5TcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFN5bWJvbFNwYW4+IFNwYW5zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZVNwYW5zKHRoaXMubV9TcGFucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JU3ltYm9sTGluZVNwYW5MaXN0IENvbXByZXNzZWRTcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRTcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRTcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sPihSZWZlcmVuY2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4pKHYgPT4gbmV3IFJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFN5bWJvbFNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5TcGFucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklTeW1ib2xTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPikoX3YgPT4gbmV3IFN5bWJvbFNwYW4oKS5Db3B5RnJvbTxTeW1ib2xTcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRTcGFucyA9ICgoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbXByZXNzZWRTcGFucztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNvdXJjZVNlYXJjaE1vZGVsQmFzZSA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlU2VhcmNoTW9kZWxCYXNlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlU2VhcmNoTW9kZWxCYXNlKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VTZWFyY2hNb2RlbEJhc2U+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VTZWFyY2hNb2RlbEJhc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJvdW5kU291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1RleHRVaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlSW5mbyBtX1NvdXJjZUluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBCb3VuZFNvdXJjZUluZm8gbV9CaW5kaW5nSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFzc29jaWF0ZWQgPHNlZSBjcmVmPVwiVDpDb2RleC5JU291cmNlRmlsZVwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRVaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0VWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5Tb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUJvdW5kU291cmNlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5CaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CaW5kaW5nSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0JpbmRpbmdJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmluZGluZ0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fVGV4dFVpZCA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuVGV4dFVpZDtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KFNvdXJjZUluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0JpbmRpbmdJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8+KEJpbmRpbmdJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8+KSh2ID0+IG5ldyBCb3VuZFNvdXJjZUluZm8oKS5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gKChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFRleHRTb3VyY2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlIG1fRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRTb3VyY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRTb3VyY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZSBDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsLkZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlIEZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU+KEZpbGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPikodiA9PiBuZXcgU291cmNlRmlsZSgpLkNvcHlGcm9tPFNvdXJjZUZpbGU+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlcG9zaXRvcnkgbV9SZXBvc2l0b3J5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnlTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklSZXBvc2l0b3J5IENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwuUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnkgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5PihSZXBvc2l0b3J5LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4pKHYgPT4gbmV3IFJlcG9zaXRvcnkoKS5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQW5hbHl6ZWRQcm9qZWN0IG1fUHJvamVjdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUHJvamVjdCBDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsLlByb2plY3Qge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBBbmFseXplZFByb2plY3QgUHJvamVjdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3QgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdD4oUHJvamVjdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0PikodiA9PiBuZXcgQW5hbHl6ZWRQcm9qZWN0KCkuQ29weUZyb208QW5hbHl6ZWRQcm9qZWN0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUmVmZXJlbmNlZFByb2plY3QgbV9Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbC5Qcm9qZWN0UmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3RSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUmVmZXJlbmNlZFByb2plY3QgUHJvamVjdFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4oUHJvamVjdFJlZmVyZW5jZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4pKHYgPT4gbmV3IFJlZmVyZW5jZWRQcm9qZWN0KCkuQ29weUZyb208UmVmZXJlbmNlZFByb2plY3Q+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb21taXQgbV9Db21taXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklDb21taXQgQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsLkNvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29tbWl0IENvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KENvbW1pdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PikodiA9PiBuZXcgQ29tbWl0KCkuQ29weUZyb208Q29tbWl0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUaGUgc2V0IG9mIGZpbGVzIHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnkgYXQgYSBnaXZlbiBjb21taXQuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlc1NlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBtX0NvbW1pdEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwuQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0RmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdEZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY29tbWl0L2NoYW5nZXNldCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gZ2l0IGNvbW1pdCBoYXNoIG9yIFRGUyBjaGFuZ2VzZXQgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbW1pdEZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KShfdiA9PiBuZXcgQ29tbWl0RmlsZUxpbmsoKS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUZpbGVTdGF0aXN0aWNzKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBGaWxlU3RhdGlzdGljcyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklGaWxlU3RhdGlzdGljcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEZpbGVTdGF0aXN0aWNzKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBGaWxlU3RhdGlzdGljcyhDb2RleC5JRmlsZVN0YXRpc3RpY3MgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEZpbGVTdGF0aXN0aWNzPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUZpbGVTdGF0aXN0aWNzIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRmlsZVN0YXRpc3RpY3Mge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGFuIElDb2RleFJlcG9zaXRvcnlTdG9yZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVN0b3JlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlcG9zaXRvcnkgbV9SZXBvc2l0b3J5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQnJhbmNoIG1fQnJhbmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29tbWl0IG1fQ29tbWl0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U3RvcmVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U3RvcmVJbmZvKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5U3RvcmVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG9zaXRvcnkgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUmVwb3NpdG9yeSBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5SZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwb3NpdG9yeSBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYnJhbmNoIGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUJyYW5jaCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5CcmFuY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJyYW5jaCBCcmFuY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CcmFuY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CcmFuY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21taXQgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JQ29tbWl0IENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvLkNvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29tbWl0IENvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5U3RvcmVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnkgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5PihSZXBvc2l0b3J5LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4pKHYgPT4gbmV3IFJlcG9zaXRvcnkoKS5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0JyYW5jaCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoPihCcmFuY2gsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaD4pKHYgPT4gbmV3IEJyYW5jaCgpLkNvcHlGcm9tPEJyYW5jaD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdD4oQ29tbWl0LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KSh2ID0+IG5ldyBDb21taXQoKS5Db3B5RnJvbTxDb21taXQ+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGRpcmVjdG9yeSBpbiBzb3VyY2UgY29udHJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdEZpbGVzRGlyZWN0b3J5IDogUmVwb0ZpbGVTY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlc0RpcmVjdG9yeT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5LkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGluIHRoZSBkaXJlY3RvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNEaXJlY3Rvcnkge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKF92ID0+IG5ldyBDb21taXRGaWxlTGluaygpLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvRmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN0b3JlZEJvdW5kU291cmNlRmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQm91bmRTb3VyY2VGaWxlIG1fQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBtX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JUmVmZXJlbmNlTGlzdCBtX0NvbXByZXNzZWRSZWZlcmVuY2VzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEJvdW5kU291cmNlRmlsZShDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTdG9yZWRCb3VuZFNvdXJjZUZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSUJvdW5kU291cmNlRmlsZSBDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlLkJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQm91bmRTb3VyY2VGaWxlIEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0JvdW5kU291cmNlRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0JvdW5kU291cmNlRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIGNsYXNzaWZpY2F0aW9uIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JQ2xhc3NpZmljYXRpb25MaXN0IENvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHJlZmVyZW5jZSBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSVJlZmVyZW5jZUxpc3QgQ29tcHJlc3NlZFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3RvcmVkQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX0JvdW5kU291cmNlRmlsZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlPihCb3VuZFNvdXJjZUZpbGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZT4pKHYgPT4gbmV3IEJvdW5kU291cmNlRmlsZSgpLkNvcHlGcm9tPEJvdW5kU291cmNlRmlsZT4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zID0gKChDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSh2YWx1ZSkpLkNvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9ICgoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkodmFsdWUpKS5Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEZWZpbml0aW9uU3ltYm9sIDogUmVmZXJlbmNlU3ltYm9sLCBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9VaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EaXNwbGF5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Nob3J0TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmdbXSBtX01vZGlmaWVycztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLkdseXBoIG1fR2x5cGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TeW1ib2xEZXB0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERvY3VtZW50YXRpb25JbmZvIG1fRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9UeXBlTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKENvZGV4LklEZWZpbml0aW9uU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyBub3QgYXBwbGljYWJsZSB0byBtb3N0IHN5bWJvbHMuIE9ubHkgc2V0IGZvciBzeW1ib2xzXHJcbiAgICAgICAgLy8vIHdoaWNoIGFyZSBhZGRlZCBpbiBhIHNoYXJlZCBjb250ZXh0IGFuZCBuZWVkIHRoaXMgZm9yIGRlZHVwbGljYXRpb24pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVWlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEaXNwbGF5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaG9ydCBuYW1lIG9mIHRoZSBzeW1ib2wgKGkuZS4gVGFzaykuXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgdXNlZCB0byBmaW5kIHRoZSBzeW1ib2wgd2hlbiBzZWFyY2ggdGVybSBkb2VzIG5vdCBjb250YWluICcuJ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNob3J0TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VTaG9ydE5hbWUodGhpcy5tX1Nob3J0TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaG9ydE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBxdWFsaWZpZWQgbmFtZSBvZiB0aGUgc3ltYm9sIChpLmUuIFN5c3RlbS5UaHJlYWRpbmcuVGFza3MuVGFzaykuXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgdXNlZCB0byBmaW5kIHRoZSBzeW1ib2wgd2hlbiB0aGUgc2VhcmNoIHRlcm0gY29udGFpbnMgJy4nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29udGFpbmVyUXVhbGlmaWVkTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBNb2RpZmllcnMgZm9yIHRoZSBzeW1ib2wgc3VjaCBhcyBwdWJsaWNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZ1tdIE1vZGlmaWVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX01vZGlmaWVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX01vZGlmaWVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGdseXBoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5PYmplY3RNb2RlbC5HbHlwaCBHbHlwaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0dseXBoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fR2x5cGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZXB0aCBvZiB0aGUgc3ltYm9sIGluIGl0cyBzeW1ib2xpYyB0cmVlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3ltYm9sRGVwdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TeW1ib2xEZXB0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N5bWJvbERlcHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciB0aGUgc3ltYm9sIChpZiBhbnkpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8gQ29kZXguSURlZmluaXRpb25TeW1ib2wuRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciB0aGUgc3ltYm9sIChpZiBhbnkpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEb2N1bWVudGF0aW9uSW5mbyBEb2N1bWVudGF0aW9uSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRG9jdW1lbnRhdGlvbkluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSB0eXBlIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIChpLmUuIHJldHVybiB0eXBlIG9mIG1ldGhvZClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUeXBlTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1R5cGVOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWNsYXJhdGlvbiBuYW1lIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVjbGFyYXRpb25OYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fVWlkID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5VaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9TaG9ydE5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlNob3J0TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbnRhaW5lclF1YWxpZmllZE5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkNvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Nb2RpZmllcnMgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLk1vZGlmaWVycztcclxuICAgICAgICAgICAgdGhpcy5tX0dseXBoID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5HbHlwaDtcclxuICAgICAgICAgICAgdGhpcy5tX1N5bWJvbERlcHRoID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5TeW1ib2xEZXB0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25JbmZvPihEb2N1bWVudGF0aW9uSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbz4pKHYgPT4gbmV3IERvY3VtZW50YXRpb25JbmZvKCkuQ29weUZyb208RG9jdW1lbnRhdGlvbkluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fVHlwZU5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlR5cGVOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4oKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVN5bWJvbCA6IFN5bWJvbCwgQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0lzSW1wbGljaXRseURlY2xhcmVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3ltYm9sKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUga2luZCBvZiByZWZlcmVuY2UuIFRoaXMgaXMgdXNlZCB0byBncm91cCByZWZlcmVuY2VzLlxyXG4gICAgICAgIC8vLyAoaS5lLiBmb3IgQyMoYWthIC5ORVQpIE1ldGhvZE92ZXJyaWRlLCBJbnRlcmZhY2VNZW1iZXJJbXBsZW1lbnRhdGlvbiwgSW50ZXJmYWNlSW1wbGVtZW50YXRpb24sIGV0Yy4pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVmZXJlbmNlS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZUtpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhlIGNvcnJlc3BvbmRpbmcgZGVmaW5pdGlvbiBpcyBpbXBsaWNpdGx5IGRlY2xhcmVkIGFuZCB0aGVyZWZvcmUgdGhpcyBzaG91bGQgbm90IGJlXHJcbiAgICAgICAgLy8vIHVzZWQgZm9yIGZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzSW1wbGljaXRseURlY2xhcmVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Jc0ltcGxpY2l0bHlEZWNsYXJlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIGlmIHRoZSBzeW1ib2wgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlZmluaXRpb24vZmluZCBhbGwgcmVmZXJlbmNlcyBzZWFyY2ggKGJ5IGRlZmF1bHQpLlxyXG4gICAgICAgIC8vLyBTeW1ib2wgd2lsbCBvbmx5IGJlIGluY2x1ZGVkIGlmIGtpbmQgaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgaWYgdGhlIHN5bWJvbCBzaG91bGQgTkVWRVIgYmUgaW5jbHVkZWQgaW4gdGhlIGRlZmluaXRpb24vZmluZCBhbGwgcmVmZXJlbmNlcyBzZWFyY2guXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tU2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VLaW5kID0gKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLlJlZmVyZW5jZUtpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Jc0ltcGxpY2l0bHlEZWNsYXJlZCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5Jc0ltcGxpY2l0bHlEZWNsYXJlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2g7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2w+KCgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN5bWJvbCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2woKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgaW4gd2hpY2ggdGhlIHN5bWJvbCBhcHBlYXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3ltYm9sIGtpbmQuIChpLmUuIGludGVyZmFjZSwgbWV0aG9kLCBmaWVsZClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICB0aGlzLm1fS2luZCA9ICgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkuS2luZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU2VhcmNoUmVzdWx0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguU2RrLlNlYXJjaC5JUmVmZXJlbmNlU2VhcmNoUmVzdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZVN5bWJvbCBtX1JlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaFJlc3VsdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlU3ltYm9sIENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdC5SZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZVN5bWJvbCBSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4oUmVmZXJlbmNlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBSZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0TGluZVNwYW5SZXN1bHQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgVGV4dExpbmVTcGFuIG1fVGV4dFNwYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdChDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0TGluZVNwYW5SZXN1bHQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVRleHRMaW5lU3BhbiBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQuVGV4dFNwYW4ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVGV4dFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVGV4dExpbmVTcGFuIFRleHRTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0U3BhbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dExpbmVTcGFuUmVzdWx0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRTcGFuID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4+KFRleHRTcGFuLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4+KSh2ID0+IG5ldyBUZXh0TGluZVNwYW4oKS5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWFyY2hSZXN1bHQgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgVGV4dExpbmVTcGFuUmVzdWx0IG1fVGV4dExpbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoUmVzdWx0KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hSZXN1bHQoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTZWFyY2hSZXN1bHQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGV4dCBzcGFuIGZvciBhIHRleHQgcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQgQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LlRleHRMaW5lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRleHRMaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRleHQgc3BhbiBmb3IgYSB0ZXh0IHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVGV4dExpbmVTcGFuUmVzdWx0IFRleHRMaW5lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dExpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0TGluZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdC5EZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0TGluZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0PihUZXh0TGluZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0PikodiA9PiBuZXcgVGV4dExpbmVTcGFuUmVzdWx0KCkuQ29weUZyb208VGV4dExpbmVTcGFuUmVzdWx0Pih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPihEZWZpbml0aW9uLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKHYgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBJbmRleCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LlNkay5TZWFyY2guSUluZGV4IHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEluZGV4KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxJbmRleD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogSW5kZXgge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm5hbWVzcGFjZSBDb2RleC5GcmFtZXdvcmsuVHlwZXMge1xyXG4gICAgdXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuICAgIHVzaW5nIENvbW1pdCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdDtcclxuICAgIHVzaW5nIENvbW1pdENoYW5nZWRGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU7XHJcbiAgICB1c2luZyBDb21taXRGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rO1xyXG4gICAgdXNpbmcgQnJhbmNoID0gQ29kZXguT2JqZWN0TW9kZWwuQnJhbmNoO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlQ29udHJvbEZpbGVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbztcclxuICAgIHVzaW5nIEVuY29kaW5nRGVzY3JpcHRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBPdXRsaW5pbmdSZWdpb24gPSBDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb247XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3BhbjtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW47XHJcbiAgICB1c2luZyBDbGFzc2lmaWNhdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW47XHJcbiAgICB1c2luZyBTeW1ib2xTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3BhbjtcclxuICAgIHVzaW5nIFRleHRMaW5lU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbjtcclxuICAgIHVzaW5nIExpbmVTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW47XHJcbiAgICB1c2luZyBTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3BhbjtcclxuICAgIHVzaW5nIENvZGVSZXZpZXcgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3O1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0l0ZXJhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdJdGVyYXRpb247XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3ZXJJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld2VySW5mbztcclxuICAgIHVzaW5nIENvZGVSZXZpZXdGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU7XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50VGhyZWFkO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0NvbW1lbnQgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudDtcclxuICAgIHVzaW5nIExhbmd1YWdlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbztcclxuICAgIHVzaW5nIENsYXNzaWZpY2F0aW9uU3R5bGUgPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlO1xyXG4gICAgdXNpbmcgQW5hbHl6ZWRQcm9qZWN0ID0gQ29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0O1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlZFByb2plY3QgPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdDtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaztcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25JbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICB1c2luZyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sO1xyXG4gICAgdXNpbmcgUHJvcGVydHlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBQcm9wZXJ0eU1hcCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwO1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5UmVmZXJlbmNlID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZTtcclxuICAgIHVzaW5nIFNlYXJjaEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaEVudGl0eTtcclxuICAgIHVzaW5nIFJlcG9TY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9TY29wZUVudGl0eTtcclxuICAgIHVzaW5nIENvbW1pdFNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBQcm9qZWN0U2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBSZXBvRmlsZVNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb0ZpbGVTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlU2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZVNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUmVnaXN0ZXJlZEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZ2lzdGVyZWRFbnRpdHk7XHJcbiAgICB1c2luZyBTdG9yZWRGaWx0ZXIgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRGaWx0ZXI7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBMYW5ndWFnZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UgPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VTZWFyY2hNb2RlbEJhc2U7XHJcbiAgICB1c2luZyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFRleHRTb3VyY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlcG9zaXRvcnlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIENvbW1pdFNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBDb21taXRGaWxlc1NlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIEZpbGVTdGF0aXN0aWNzID0gQ29kZXguT2JqZWN0TW9kZWwuRmlsZVN0YXRpc3RpY3M7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5U3RvcmVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVN0b3JlSW5mbztcclxuICAgIHVzaW5nIENvbW1pdEZpbGVzRGlyZWN0b3J5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNEaXJlY3Rvcnk7XHJcbiAgICB1c2luZyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRCb3VuZFNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbDtcclxuICAgIHVzaW5nIFN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNlYXJjaFJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNlYXJjaFJlc3VsdDtcclxuICAgIHVzaW5nIFRleHRMaW5lU3BhblJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdDtcclxuICAgIHVzaW5nIFNlYXJjaFJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaFJlc3VsdDtcclxuICAgIHVzaW5nIEluZGV4ID0gQ29kZXguT2JqZWN0TW9kZWwuSW5kZXg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIHBhcnRpYWwgaW50ZXJmYWNlIElTdG9yZSB7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIENvZGV4IGdseXBoc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBlbnVtIEdseXBoXHJcbiAgICB7XHJcbiAgICAgICAgVW5rbm93biA9IC0xLFxyXG4gICAgICAgIEFzc2VtYmx5LFxyXG5cclxuICAgICAgICBCYXNpY0ZpbGUsXHJcbiAgICAgICAgQmFzaWNQcm9qZWN0LFxyXG5cclxuICAgICAgICBDbGFzc1B1YmxpYyxcclxuICAgICAgICBDbGFzc1Byb3RlY3RlZCxcclxuICAgICAgICBDbGFzc1ByaXZhdGUsXHJcbiAgICAgICAgQ2xhc3NJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgQ1NoYXJwRmlsZSxcclxuICAgICAgICBDU2hhcnBQcm9qZWN0LFxyXG5cclxuICAgICAgICBDb25zdGFudFB1YmxpYyxcclxuICAgICAgICBDb25zdGFudFByb3RlY3RlZCxcclxuICAgICAgICBDb25zdGFudFByaXZhdGUsXHJcbiAgICAgICAgQ29uc3RhbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRGVsZWdhdGVQdWJsaWMsXHJcbiAgICAgICAgRGVsZWdhdGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgRGVsZWdhdGVQcml2YXRlLFxyXG4gICAgICAgIERlbGVnYXRlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1QdWJsaWMsXHJcbiAgICAgICAgRW51bVByb3RlY3RlZCxcclxuICAgICAgICBFbnVtUHJpdmF0ZSxcclxuICAgICAgICBFbnVtSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1NZW1iZXIsXHJcblxyXG4gICAgICAgIEVycm9yLFxyXG5cclxuICAgICAgICBFdmVudFB1YmxpYyxcclxuICAgICAgICBFdmVudFByb3RlY3RlZCxcclxuICAgICAgICBFdmVudFByaXZhdGUsXHJcbiAgICAgICAgRXZlbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kUHVibGljLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZCxcclxuICAgICAgICBFeHRlbnNpb25NZXRob2RQcml2YXRlLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZEludGVybmFsLFxyXG5cclxuICAgICAgICBGaWVsZFB1YmxpYyxcclxuICAgICAgICBGaWVsZFByb3RlY3RlZCxcclxuICAgICAgICBGaWVsZFByaXZhdGUsXHJcbiAgICAgICAgRmllbGRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgSW50ZXJmYWNlUHVibGljLFxyXG4gICAgICAgIEludGVyZmFjZVByb3RlY3RlZCxcclxuICAgICAgICBJbnRlcmZhY2VQcml2YXRlLFxyXG4gICAgICAgIEludGVyZmFjZUludGVybmFsLFxyXG5cclxuICAgICAgICBJbnRyaW5zaWMsXHJcblxyXG4gICAgICAgIEtleXdvcmQsXHJcblxyXG4gICAgICAgIExhYmVsLFxyXG5cclxuICAgICAgICBMb2NhbCxcclxuXHJcbiAgICAgICAgTmFtZXNwYWNlLFxyXG5cclxuICAgICAgICBNZXRob2RQdWJsaWMsXHJcbiAgICAgICAgTWV0aG9kUHJvdGVjdGVkLFxyXG4gICAgICAgIE1ldGhvZFByaXZhdGUsXHJcbiAgICAgICAgTWV0aG9kSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIE1vZHVsZVB1YmxpYyxcclxuICAgICAgICBNb2R1bGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgTW9kdWxlUHJpdmF0ZSxcclxuICAgICAgICBNb2R1bGVJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgT3BlbkZvbGRlcixcclxuXHJcbiAgICAgICAgT3BlcmF0b3IsXHJcblxyXG4gICAgICAgIFBhcmFtZXRlcixcclxuXHJcbiAgICAgICAgUHJvcGVydHlQdWJsaWMsXHJcbiAgICAgICAgUHJvcGVydHlQcm90ZWN0ZWQsXHJcbiAgICAgICAgUHJvcGVydHlQcml2YXRlLFxyXG4gICAgICAgIFByb3BlcnR5SW50ZXJuYWwsXHJcblxyXG4gICAgICAgIFJhbmdlVmFyaWFibGUsXHJcblxyXG4gICAgICAgIFJlZmVyZW5jZSxcclxuXHJcbiAgICAgICAgU3RydWN0dXJlUHVibGljLFxyXG4gICAgICAgIFN0cnVjdHVyZVByb3RlY3RlZCxcclxuICAgICAgICBTdHJ1Y3R1cmVQcml2YXRlLFxyXG4gICAgICAgIFN0cnVjdHVyZUludGVybmFsLFxyXG5cclxuICAgICAgICBUeXBlUGFyYW1ldGVyLFxyXG5cclxuICAgICAgICBVcCxcclxuICAgICAgICBEb3duLFxyXG4gICAgICAgIExlZnQsXHJcbiAgICAgICAgUmlnaHQsXHJcbiAgICAgICAgRG90LFxyXG5cclxuICAgICAgICBTbmlwcGV0XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBHbHlwaFV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXNob3J0IEdldEdseXBoTnVtYmVyKHRoaXMgR2x5cGggZ2x5cGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2hvcnQgcmVzdWx0ID0gKHVzaG9ydCkoKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoR3JvdXAoZ2x5cGgpICsgKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoSXRlbShnbHlwaCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEdyb3VwIEdldFN0YW5kYXJkR2x5cGhHcm91cChHbHlwaCBnbHlwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ2x5cGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQXNzZW1ibHk6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEFzc2VtYmx5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1ByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwQ2xhc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBDb25zdGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNTaGFycEZpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaENTaGFycEZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBEZWxlZ2F0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1QdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1NZW1iZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bU1lbWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByaXZhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEZpZWxkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEludGVyZmFjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludHJpbnNpYzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBJbnRyaW5zaWM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5LZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhLZXl3b3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGFiZWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwSW50cmluc2ljO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTG9jYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5OYW1lc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwTmFtZXNwYWNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBNb2R1bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5PcGVuRm9sZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhPcGVuRm9sZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguT3BlcmF0b3I6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwT3BlcmF0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5QYXJhbWV0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlJhbmdlVmFyaWFibGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5SZWZlcmVuY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBTdHJ1Y3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5UeXBlUGFyYW1ldGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5VcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRG93bjpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGVmdDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRvdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoQXJyb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJnbHlwaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEl0ZW0gR2V0U3RhbmRhcmRHbHlwaEl0ZW0oR2x5cGggaWNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaWNvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1Byb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbVByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1Qcml2YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtRnJpZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBhbnkgb3ZlcmxheXNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtUHVibGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGdseXBocyB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgY29tcGxldGlvbiB0b29sIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBlbnVtIFN0YW5kYXJkR2x5cGhHcm91cFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjbGFzc2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwQ2xhc3MgPSAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNvbnN0YW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cENvbnN0YW50ID0gNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBkZWxlZ2F0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBEZWxlZ2F0ZSA9IDEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGVudW1lcmF0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEVudW0gPSAxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBlbnVtZXJhdGlvbiBtZW1iZXJzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRW51bU1lbWJlciA9IDI0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV2ZW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV2ZW50ID0gMzAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXhjZXB0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV4Y2VwdGlvbiA9IDM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEZpZWxkID0gNDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJmYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludGVyZmFjZSA9IDQ4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hY3Jvcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hY3JvID0gNTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWFwcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcCA9IDYwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hcCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcEl0ZW0gPSA2NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWV0aG9kID0gNzIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igb3ZlcmxvYWRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwT3ZlcmxvYWQgPSA3OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtb2R1bGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTW9kdWxlID0gODQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbmFtZXNwYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE5hbWVzcGFjZSA9IDkwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZXJhdG9ycy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE9wZXJhdG9yID0gOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFByb3BlcnR5ID0gMTAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBTdHJ1Y3QgPSAxMDgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdGVtcGxhdGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVGVtcGxhdGUgPSAxMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdHlwZWRlZnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBUeXBlZGVmID0gMTIwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVHlwZSA9IDEyNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB1bmlvbnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmlvbiA9IDEzMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YXJpYWJsZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBWYXJpYWJsZSA9IDEzOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YWx1ZSB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFZhbHVlVHlwZSA9IDE0NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpbnRyaW5zaWMgc3ltYm9scy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludHJpbnNpYyA9IDE1MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTWV0aG9kID0gMTU2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycEZpZWxkID0gMTYyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGNsYXNzZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBDbGFzcyA9IDE2OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBuYW1lc3BhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTmFtZXNwYWNlID0gMTc0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGludGVyZmFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBJbnRlcmZhY2UgPSAxODAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXJyb3JzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRXJyb3IgPSAxODYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQlNDIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaEJzY0ZpbGUgPSAxOTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgYXNzZW1ibGllcy5cclxuICAgICAgICAgICAgR2x5cGhBc3NlbWJseSA9IDE5MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBsaWJyYXJpZXMuXHJcbiAgICAgICAgICAgIEdseXBoTGlicmFyeSA9IDE5MyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBWQiBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhWQlByb2plY3QgPSAxOTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoQ29vbFByb2plY3QgPSAxOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQysrIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaENwcFByb2plY3QgPSAxOTksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZGlhbG9nIGlkZW50aWZpZXJzLlxyXG4gICAgICAgICAgICBHbHlwaERpYWxvZ0lkID0gMjAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZW4gZm9sZGVycy5cclxuICAgICAgICAgICAgR2x5cGhPcGVuRm9sZGVyID0gMjAxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNsb3NlZCBmb2xkZXJzLlxyXG4gICAgICAgICAgICBHbHlwaENsb3NlZEZvbGRlciA9IDIwMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhcnJvdyBzeW1ib2xzLlxyXG4gICAgICAgICAgICBHbHlwaEFycm93ID0gMjAzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMjIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaENTaGFycEZpbGUgPSAyMDQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgZXhwYW5zaW9ucy5cclxuICAgICAgICAgICAgR2x5cGhDU2hhcnBFeHBhbnNpb24gPSAyMDUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Iga2V5d29yZHMuXHJcbiAgICAgICAgICAgIEdseXBoS2V5d29yZCA9IDIwNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgR2x5cGhJbmZvcm1hdGlvbiA9IDIwNyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWZlcmVuY2VzLlxyXG4gICAgICAgICAgICBHbHlwaFJlZmVyZW5jZSA9IDIwOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWN1cnNpb24uXHJcbiAgICAgICAgICAgIEdseXBoUmVjdXJzaW9uID0gMjA5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFhNTCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxJdGVtID0gMjEwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycFByb2plY3QgPSAyMTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgZG9jdW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycERvY3VtZW50ID0gMjEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZvcndhcmRlZCB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhGb3J3YXJkVHlwZSA9IDIxMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjYWxsZXJzIGdyYXBocy5cclxuICAgICAgICAgICAgR2x5cGhDYWxsZXJzR3JhcGggPSAyMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2FsbCBncmFwaHMuXHJcbiAgICAgICAgICAgIEdseXBoQ2FsbEdyYXBoID0gMjE1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGJ1aWxkIHdhcm5pbmdzLlxyXG4gICAgICAgICAgICBHbHlwaFdhcm5pbmcgPSAyMTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc29tZXRoaW5nIHRoYXQgbWF5IGJlIGEgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlUmVmZXJlbmNlID0gMjE3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHNvbWV0aGluZyB0aGF0IG1heSBiZSBhIGNhbGxlci5cclxuICAgICAgICAgICAgR2x5cGhNYXliZUNhbGxlciA9IDIxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzb21ldGhpbmcgdGhhdCBtYXkgYmUgYSBjYWxsLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlQ2FsbCA9IDIxOSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2QgPSAyMjAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJuYWwgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWwgPSAyMjEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZnJpZW5kIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZEZyaWVuZCA9IDIyMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBwcm90ZWN0ZWQgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkID0gMjIzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHByaXZhdGUgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZSA9IDIyNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kIHNob3J0Y3V0cy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RTaG9ydGN1dCA9IDIyNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBYTUwgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxBdHRyaWJ1dGUgPSAyMjYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2hpbGQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbENoaWxkID0gMjI3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGRlc2NlbmRhbnQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnQgPSAyMjgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgWE1MIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sTmFtZXNwYWNlID0gMjI5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZVF1ZXN0aW9uID0gMjMwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZUNoZWNrID0gMjMxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZFF1ZXN0aW9uID0gMjMyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZENoZWNrID0gMjMzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBkZXNjZW5kYW50IGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnRRdWVzdGlvbiA9IDIzNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBjaGVjayBtYXJrIGZvciBYTUwgZGVzY2VuZGFudCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxEZXNjZW5kYW50Q2hlY2sgPSAyMzUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY29tcGxldGlvbiB3YXJuaW5nc1xyXG4gICAgICAgICAgICBHbHlwaENvbXBsZXRpb25XYXJuaW5nID0gMjM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHVua25vd24gdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmtub3duID0gMjM3XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpY29ucyBvciBnbHlwaHMgdGhhdCBhcmUgdXNlZCBpbiBzdGF0ZW1lbnQgY29tcGxldGlvbi5cclxuICAgICAgICBwdWJsaWMgZW51bSBTdGFuZGFyZEdseXBoSXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHB1YmxpYyBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVB1YmxpYyA9IDAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYW4gaW50ZXJuYWwgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1JbnRlcm5hbCA9IDEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBmcmllbmQgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1GcmllbmQgPSAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgcHJvdGVjdGVkIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtUHJvdGVjdGVkID0gMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHByaXZhdGUgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1Qcml2YXRlID0gNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHNob3J0Y3V0IHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtU2hvcnRjdXQgPSA1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgc3ltYm9sIHRoYXQgaGFzIGFsbCAob3Igbm9uZSkgb2YgdGhlIHN0YW5kYXJkIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIFRvdGFsR2x5cGhJdGVtcyA9IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgQ29tcGF0aWJpbGl0eUV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBUb0xvd2VySW52YXJpYW50KHRoaXMgc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLlRvTG93ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDb2RleC5PYmplY3RNb2RlbFxyXG57XHJcbiAgICBwYXJ0aWFsIHN0cnVjdCBTeW1ib2xJZFxyXG4gICAge1xyXG4gICAgICAgIFtKc29uQ29uc3RydWN0b3JdXHJcbiAgICAgICAgcHVibGljIFN5bWJvbElkKHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5TZGsuU2VhcmNoXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGludGVyZmFjZSBJSW5kZXhcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEhpZ2ggbGV2ZWwgcXVlcnkgb3BlcmF0aW9ucyBmb3IgaW5kZXhlZCBjb2RlXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGFic3RyYWN0IHBhcnRpYWwgY2xhc3MgSW5kZXg8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhRdWVyeTxUPiBDcmVhdGVRdWVyeSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSVByZWZpeFByb3BlcnR5PFQ+IENyZWF0ZVByZWZpeFByb3BlcnR5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJVGVybVByb3BlcnR5PFQ+IENyZWF0ZVRlcm1Qcm9wZXJ0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBJbmRleFF1ZXJ5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluZGV4RmlsdGVyPFQ+IEZpbHRlciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgaW50IE1heFJlc3VsdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPFQ+PiBFeGVjdXRlQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgUHJlZml4RnVsbE5hbWVJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gUHJlZml4RnVsbE5hbWUoc3RyaW5nIHByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFByZWZpeEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBQcmVmaXgoc3RyaW5nIHByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIE5vcm1hbGl6ZWRLZXl3b3JkSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIEZ1bGxUZXh0SW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IENvbnRhaW5zKHN0cmluZyBwaHJhc2UpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gQ29udGFpbnNBbGwoc3RyaW5nW10gdGVybXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFNvcnR3b3JkIGlzIG5vcm1hbGx5IGFsc28gYSBub3JtYWxpemVkIGtleXdvcmQuIElzIHRoaXMgYWx3YXlzIHRoZSBjYXNlP1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFNvcnR3b3JkSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBNYXRjaDxUVmFsdWU+KFRWYWx1ZSB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUHJlZml4UHJvcGVydHk8VD4gOiBJVGVybVByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgSW5kZXhGaWx0ZXI8VD4gUHJlZml4KHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRlcm1Qcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIEluZGV4RmlsdGVyPFQ+IE1hdGNoPFRWYWx1ZT4oVFZhbHVlIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBCaW5hcnlPcGVyYXRvclxyXG4gICAge1xyXG4gICAgICAgIEFuZCxcclxuICAgICAgICBPcixcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmluYXJ5RmlsdGVyPFQ+IDogSW5kZXhGaWx0ZXI8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgQmluYXJ5T3BlcmF0b3IgT3BlcmF0b3I7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEluZGV4RmlsdGVyPFQ+IExlZnQ7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEluZGV4RmlsdGVyPFQ+IFJpZ2h0O1xyXG5cclxuICAgICAgICBwdWJsaWMgQmluYXJ5RmlsdGVyKEJpbmFyeU9wZXJhdG9yIG9wLCBJbmRleEZpbHRlcjxUPiBsZWZ0LCBJbmRleEZpbHRlcjxUPiByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZXJhdG9yID0gb3A7XHJcbiAgICAgICAgICAgIExlZnQgPSBsZWZ0O1xyXG4gICAgICAgICAgICBSaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhGaWx0ZXI8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEluZGV4RmlsdGVyPFQ+IG9wZXJhdG9yICYoSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmFyeUZpbHRlcjxUPihCaW5hcnlPcGVyYXRvci5BbmQsIGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW5kZXhGaWx0ZXI8VD4gb3BlcmF0b3IgfChJbmRleEZpbHRlcjxUPiBsZWZ0LCBJbmRleEZpbHRlcjxUPiByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5RmlsdGVyPFQ+KEJpbmFyeU9wZXJhdG9yLk9yLCBsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUluZGV4UXVlcnk8VD5cclxuICAgIHtcclxuICAgICAgICBJSW5kZXhRdWVyeUZpbHRlcjxUPiBGaWx0ZXIgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IE1heFJlc3VsdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxUPj4gRXhlY3V0ZUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHZvaWQgRXhjbHVkZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElJbmRleFF1ZXJ5RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgdm9pZCBFeGNsdWRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlNkay5TZWFyY2hcclxue1xyXG4gICAgLy8gK1RPRE86IEdlbmVyYXRlIEFTUC5OZXQgZW5kcG9pbnQgd2hpY2ggaGFuZGxlcyBhbGwgdGhlc2UgY2FsbHMuIFBvdGVudGlhbGx5IGFsc28gaW1wbGVtZW50XHJcbiAgICAvLyBjYWxsZXIgKGkuZS4gV2ViQXBpQ29kZXggOiBJQ29kZXgpXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSGlnaCBsZXZlbCBvcGVyYXRpb25zIGZvciBjb2RleCBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb2RleFxyXG4gICAge1xyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4gU2VhcmNoQXN5bmMoU2VhcmNoQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoUmVzdWx0Pj4gRmluZEFsbFJlZmVyZW5jZXNBc3luYyhGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZpbmQgZGVmaW5pdGlvbiBmb3IgYSBzeW1ib2xcclxuICAgICAgICAvLy8gVXNhZ2U6IERvY3VtZW50YXRpb24gaG92ZXIgdG9vbHRpcFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRmluZCBkZWZpbml0aW9uIGxvY2F0aW9uIGZvciBhIHN5bWJvbFxyXG4gICAgICAgIC8vLyBVc2FnZTogR28gVG8gRGVmaW5pdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hSZXN1bHQ+PiBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXN5bmMoRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxJQm91bmRTb3VyY2VGaWxlPj4gR2V0U291cmNlQXN5bmMoR2V0U291cmNlQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gQ29kZXhTZXJ2aWNlTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgU2VhcmNoLFxyXG4gICAgICAgIEZpbmRBbGxSZWZzLFxyXG4gICAgICAgIEZpbmREZWYsXHJcbiAgICAgICAgRmluZERlZkxvY2F0aW9uLFxyXG4gICAgICAgIEdldFNvdXJjZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBNYXhSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXG4gICAgXG5wcml2YXRlIGludCBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fTWF4UmVzdWx0cz0xMDA7fVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlIDogQ29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIHJlcG9zaXRvcnkgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nUmVwb3NpdG9yeUlkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIHByb2plY3QgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nUHJvamVjdElkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIGZpbGUgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nRmlsZUlkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2UgOiBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3ltYm9sIGlkIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3ltYm9sSWQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IGlkIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdElkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZERlZmluaXRpb25Bcmd1bWVudHMgOiBGaW5kU3ltYm9sQXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZEFsbFJlZmVyZW5jZXNBcmd1bWVudHMgOiBGaW5kU3ltYm9sQXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VhcmNoQXJndW1lbnRzIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU2VhcmNoU3RyaW5nIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR2V0U291cmNlQXJndW1lbnRzIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdElkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZWZlcmVuY2VTZWFyY2hSZXN1bHQgOiBJUHJvamVjdEZpbGVTY29wZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElSZWZlcmVuY2VTeW1ib2wgUmVmZXJlbmNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRleHRMaW5lU3BhblJlc3VsdCA6IElQcm9qZWN0RmlsZVNjb3BlRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVRleHRMaW5lU3BhbiBUZXh0U3BhbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTZWFyY2hSZXN1bHRcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0ZXh0IHNwYW4gZm9yIGEgdGV4dCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElUZXh0TGluZVNwYW5SZXN1bHQgVGV4dExpbmUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0cnVjdCBTZXJpYWxpemFibGVUaW1lU3BhblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBsb25nIFRpY2tzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YWJsZVRpbWVTcGFuKFRpbWVTcGFuIHRpbWVzcGFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGlja3MgPSB0aW1lc3Bhbi5UaWNrcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUaW1lU3BhbiBBc1RpbWVTcGFuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUaW1lU3Bhbi5Gcm9tVGlja3MoVGlja3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBUaW1lU3BhbihTZXJpYWxpemFibGVUaW1lU3BhbiB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5Bc1RpbWVTcGFuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIFNlcmlhbGl6YWJsZVRpbWVTcGFuKFRpbWVTcGFuIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXJpYWxpemFibGVUaW1lU3Bhbih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBBc1RpbWVTcGFuKCkuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlSZXNwb25zZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWYgdGhlIHF1ZXJ5IGZhaWxlZCwgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRXJyb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByYXcgcXVlcnkgc2VudCB0byB0aGUgaW5kZXggc2VydmVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgTGlzdDxzdHJpbmc+IFJhd1F1ZXJpZXMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzcGVudCBleGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4gRHVyYXRpb24geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzcGVudCBleGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4gU2VydmVyVGltZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJFcnJvcjogezB9LCBEdXJhdGlvbjogezF9XCIsRXJyb3IsRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeVJlc3BvbnNlPFQ+IDogSW5kZXhRdWVyeVJlc3BvbnNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVzdWx0cyBvZiB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBUIFJlc3VsdCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJSZXN1bHQ6IHswfSwgezF9XCIsUmVzdWx0LGJhc2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5SGl0czxUPlxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIG1hdGNoaW5nIHRoZSBxdWVyeS4gXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgbWF5IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGhpdHMgcmV0dXJuZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgbG9uZyBUb3RhbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUPiBIaXRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIlRvdGFsOiB7MH0sIHsxfVwiLFRvdGFsLGJhc2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPFQ+IDogSW5kZXhRdWVyeVJlc3BvbnNlPEluZGV4UXVlcnlIaXRzPFQ+PlxyXG4gICAge1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uTGlucS5FeHByZXNzaW9ucztcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFNlYXJjaFR5cGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQ7IHByb3RlY3RlZCBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEluZGV4TmFtZSB7IGdldDsgcHJvdGVjdGVkIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgSWQgeyBnZXQ7IHByb3RlY3RlZCBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlPFQ+IENyZWF0ZTxUPihMaXN0PFNlYXJjaFR5cGU+IHJlZ2lzdGVyZWRTZWFyY2hUeXBlcywgW0NhbGxlck1lbWJlck5hbWVdc3RyaW5nIG5hbWUgPSBudWxsKVxyXG4gICAgICAgICAgICB3aGVyZSBUIDogY2xhc3MsIElTZWFyY2hFbnRpdHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hUeXBlID0gbmV3IFNlYXJjaFR5cGU8VD4obmFtZSk7XHJcbiAgICAgICAgICAgIHNlYXJjaFR5cGUuSWQgPSByZWdpc3RlcmVkU2VhcmNoVHlwZXMuQ291bnQ7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRTZWFyY2hUeXBlcy5BZGQoc2VhcmNoVHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFR5cGUgVHlwZSB7IGdldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTZWFyY2hUeXBlPFRTZWFyY2hUeXBlPiA6IFNlYXJjaFR5cGVcclxuICAgICAgICB3aGVyZSBUU2VhcmNoVHlwZSA6IGNsYXNzLCBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIFR5cGUgVHlwZSB7Z2V0e3JldHVybiB0eXBlb2YoVFNlYXJjaFR5cGUpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PiBDb3B5VG9GaWVsZHMgPSBuZXcgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4oKTtcclxuXHJcbiAgICAgICAgcHVibGljIExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+IEluaGVyaXRGaWVsZHMgPSBuZXcgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4oKTtcclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGUoc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgSW5kZXhOYW1lID0gTmFtZS5Ub0xvd2VySW52YXJpYW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gSW5oZXJpdDxUPihcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBUPj4gcHJvdmlkZXJGaWVsZCxcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBUPj4gc2VhcmNoRmllbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlPFRTZWFyY2hUeXBlPiBDb3B5VG8oXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4gc291cmNlRmllbGQsXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4gdGFyZ2V0RmllbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlPFRTZWFyY2hUeXBlPiBFeGNsdWRlKFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHNlYXJjaEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gU2VhcmNoQXM8VD4oXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHNlYXJjaEZpZWxkLFxyXG4gICAgICAgICAgICBTZWFyY2hCZWhhdmlvciBiZWhhdmlvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5MaW5xLkV4cHJlc3Npb25zO1xyXG51c2luZyBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2VzO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICAvKlxyXG4gICAgICogVHlwZXMgaW4gdGhpcyBmaWxlIGRlZmluZSBzZWFyY2ggYmVoYXZpb3JzLiBDaGFuZ2VzIHNob3VsZCBiZSBtYWRlIHdpdGggY2F1dGlvbiBhcyB0aGV5IGNhbiBhZmZlY3RcclxuICAgICAqIHRoZSBtYXBwaW5nIHNjaGVtYSBmb3IgaW5kaWNlcyBhbmQgd2lsbCBnZW5lcmFsbHkgbmVlZCB0byBiZSBiYWNrd2FyZCBjb21wYXRpYmxlLlxyXG4gICAgICogQWRkaXRpb25zIHNob3VsZCBiZSBnZW5lcmFsbHkgc2FmZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsYXNzIFNlYXJjaFR5cGVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMaXN0PFNlYXJjaFR5cGU+IFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyA9IG5ldyBMaXN0PFNlYXJjaFR5cGU+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBEZWZpbml0aW9uID0gU2VhcmNoVHlwZS5DcmVhdGU8SURlZmluaXRpb25TZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Nb2RpZmllcnMsIGRzID0+IGRzLktleXdvcmRzKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLktpbmQsIGRzID0+IGRzLktpbmQpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoLCBkcyA9PiBkcy5FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2gpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uS2luZCwgZHMgPT4gZHMuS2V5d29yZHMpXHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uU2hvcnROYW1lLCBkcyA9PiBkcy5TaG9ydE5hbWUpXHJcbiAgICAgICAgLy8vLy5Db3B5VG8oZHMgPT4gZHMuTGFuZ3VhZ2UsIGRzID0+IGRzLktleXdvcmRzKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLlByb2plY3RJZCwgZHMgPT4gZHMuUHJvamVjdElkKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLlByb2plY3RJZCwgZHMgPT4gZHMuS2V5d29yZHMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUmVmZXJlbmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgIC8vLkNvcHlUbyhycyA9PiBycy5TcGFucy5GaXJzdCgpLlJlZmVyZW5jZSwgcnMgPT4gcnMuUmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFRleHRTb3VyY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJVGV4dFNvdXJjZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuQ29udGVudCwgc3MgPT4gc3MuQ29udGVudClcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkluZm8uUmVwb1JlbGF0aXZlUGF0aCwgc3MgPT4gc3MuUmVwb1JlbGF0aXZlUGF0aClcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Qcm9qZWN0SWQsIHNzID0+IHNzLlByb2plY3RJZClcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5JbmZvLlBhdGgsIHNzID0+IHNzLkZpbGVQYXRoKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIEJvdW5kU291cmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SUJvdW5kU291cmNlU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuQ29udGVudCwgc3MgPT4gc3MuQ29udGVudClcclxuICAgICAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5JbmZvLlJlcG9SZWxhdGl2ZVBhdGgsIHNzID0+IHNzLlJlcG9SZWxhdGl2ZVBhdGgpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5CaW5kaW5nSW5mby5Qcm9qZWN0SWQsIHNzID0+IHNzLlByb2plY3RJZClcclxuICAgICAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGVQYXRoLCBzcyA9PiBzcy5GaWxlUGF0aCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBMYW5ndWFnZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElMYW5ndWFnZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUmVwb3NpdG9yeSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElSZXBvc2l0b3J5U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBQcm9qZWN0ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVByb2plY3RTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKVxyXG4gICAgICAgICAgICAuRXhjbHVkZShzbSA9PiBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkZpcnN0PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0PihzbS5Qcm9qZWN0LlByb2plY3RSZWZlcmVuY2VzKS5EZWZpbml0aW9ucyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBDb21taXQgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJQ29tbWl0U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBDb21taXRGaWxlcyA9IFNlYXJjaFR5cGUuQ3JlYXRlPElDb21taXRGaWxlc1NlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvamVjdFJlZmVyZW5jZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBQcm9wZXJ0eSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElQcm9wZXJ0eVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgU3RvcmVkRmlsdGVyID0gU2VhcmNoVHlwZS5DcmVhdGU8SVN0b3JlZEZpbHRlcj4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlZ2lzdGVyZWRFbnRpdHkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUmVnaXN0ZXJlZEVudGl0eT4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW4gb3JkZXIgdG8gY29tcHV0ZSBhIHN0YWJsZSBpbnRlZ3JhbCBpZCBmb3IgZWFjaCBlbnRpdHkuIFRoaXMgdHlwZSBpcyB1c2VkIHRvIHN0b3JlIGludG8gYSAnZm9sbG93JyBpbmRleCB3aGljaFxyXG4gICAgLy8vIHN0b3JlcyBlbnRpdGllcyBvZiB0aGlzIHR5cGUgdXNpbmcgdGhlIDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuVWlkXCIvPiBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWFyY2ggZW50aXR5LiBUaGVuIHRoZVxyXG4gICAgLy8vIHNlcXVlbmNlIG51bWJlciBhc3NpZ25lZCBieSBFbGFzdGljU2VhcmNoIGlzIHVzZWQgYXMgdGhlIHNoYXJkIHN0YWJsZSBpZCAoPHNlZSBjcmVmPVwiSVNlYXJjaEVudGl0eS5TaGFyZFN0YWJsZUlkXCIvPilcclxuICAgIC8vLyBmb3IgdGhlIGVudGl0eS4gVGhpcyBhcHByb2FjaCBpcyB1c2VkIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzdGFibGUgaWQgYXBwZWFycyBhcyBhbiBleHBsaWNpdCBmaWVsZCBpbiB0aGUgZG9jdW1lbnQgcmF0aGVyXHJcbiAgICAvLy8gd2hpY2ggYWxsb3dzIGNvbmZpZ3VyYXRpb24gb2YgaG93IHRoZSBmaWVsZCBpcyBpbmRleGVkIChub3QgdHJ1ZSBmb3Igc2VxdWVuY2UgbnVtYmVyIGZpZWxkIHdpdGhvdXQgY29kZSBjaGFuZ2VzIHRvIEVTKS5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZWdpc3RlcmVkRW50aXR5IDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgaW4gd2hpY2ggdGhlIGVudGl0eSB3YXMgcmVnaXN0ZXJlZCAoaS5lLiBhZGRlZCB0byB0aGUgc3RvcmUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBEYXRlVGltZSBEYXRlQWRkZWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIGEgc3RvcmVkIGZpbHRlciB3aGljaCBtYXRjaGVzIGVudGl0aWVzIGluIGEgcGFydGljdWxhciBpbmRleCBzaGFyZCBpbiBhIHN0YWJsZSBtYW5uZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTdG9yZWRGaWx0ZXIgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGltZSBvZiB0aGUgbGFzdCB1cGRhdGUgdG8gdGhlIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIERhdGVUaW1lIERhdGVVcGRhdGVkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgaW5kZXggdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgc3RyaW5nIEluZGV4TmFtZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2hhcmQgdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IFNoYXJkIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RhYmxlIGlkcyB0byBpbmNsdWRlIGluIHRoZSBzdG9yZWQgZmlsdGVyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxsb25nPiBTdGFibGVJZHMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiB1aWRzIHRvIGZvciBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxzdHJpbmc+IEJhc2VVaWRzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8Ynl0ZVtdPiBVbmlvbkZpbHRlcnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN0b3JlZCBmaWx0ZXIgYml0IHNldCB3aGljaCBtYXRjaGVzIHRoZSBzdG9yZWQgZmlsdGVyIGRvY3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgYnl0ZVtdIEZpbHRlciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaGFzaCBvZiA8c2VlIGNyZWY9XCJGaWx0ZXJcIi8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBzdHJpbmcgRmlsdGVySGFzaCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY291bnQgb2YgZWxlbWVudHMgbWF0Y2hlZCBieSA8c2VlIGNyZWY9XCJGaWx0ZXJcIi8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBpbnQgRmlsdGVyQ291bnQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJRGVmaW5pdGlvblNlYXJjaE1vZGVsIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86IE5vdCBzdXJlIHRoYXQgdGhpcyBpcyBhY3R1YWxseSBuZWVkZWRcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEtleXdvcmRzIGFyZSBhZGRpdGlvbmFsIHRlcm1zIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBnaXZlbiBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IEtleXdvcmRzIGNhbiBvbmx5IGJlIHVzZWQgdG8gc2VsZWN0IGZyb20gc3ltYm9scyB3aGljaCBoYXZlXHJcbiAgICAgICAgLy8vIGEgcHJpbWFyeSB0ZXJtIG1hdGNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9ybWFsaXplZEtleXdvcmQpXVxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8c3RyaW5nPiBLZXl3b3JkcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElMYW5ndWFnZVNlYXJjaE1vZGVsIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElMYW5ndWFnZUluZm8gTGFuZ3VhZ2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBJUHJvamVjdEZpbGVTY29wZUVudGl0eSwgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWZlcmVuY2VTeW1ib2wgUmVmZXJlbmNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOZWVkIHNvbWUgc29ydCBvZiBvdmVycmlkZSBmb3Igc2VhcmNoaW5nIFJlbGF0ZWREZWZpbml0aW9uIG9mIHRoZVxyXG4gICAgICAgIC8vIFJlZmVyZW5jZVNwYW5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgW1JlYWRPbmx5TGlzdF1cclxuICAgICAgICBbQ29lcmNlR2V0XVxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8SVN5bWJvbFNwYW4+IFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElTeW1ib2xMaW5lU3Bhbkxpc3QgQ29tcHJlc3NlZFNwYW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElTb3VyY2VDb250cm9sRmlsZUluZm8gU291cmNlQ29udHJvbEluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQm91bmRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYXNzb2NpYXRlZCA8c2VlIGNyZWY9XCJJU291cmNlRmlsZVwiLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBUZXh0VWlkIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSUJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgY2xhc3NpZmljYXRpb24gc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBJQ2xhc3NpZmljYXRpb25MaXN0IENvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHJlZmVyZW5jZSBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRleHRTb3VyY2VTZWFyY2hNb2RlbCA6IElTb3VyY2VTZWFyY2hNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICBJU291cmNlRmlsZSBGaWxlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVwb3NpdG9yeSBSZXBvc2l0b3J5IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUHJvamVjdCBQcm9qZWN0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IElQcm9qZWN0U2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVmZXJlbmNlZFByb2plY3QgUHJvamVjdFJlZmVyZW5jZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb21taXRTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJQ29tbWl0IENvbW1pdCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhlIHNldCBvZiBmaWxlcyBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5IGF0IGEgZ2l2ZW4gY29tbWl0LlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwgOiBJQ29tbWl0U2NvcGVFbnRpdHksIElSZXBvU2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVhZE9ubHlMaXN0PElDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgQ29kZXguT2JqZWN0TW9kZWw7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVXRpbGl0aWVzXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBDb2xsZWN0aW9uVXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNsYXNzIEVtcHR5PFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExpc3Q8VD4gTGlzdCA9IG5ldyBMaXN0PFQ+KDApO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUW10gQXJyYXkgPSBuZXcgVFswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlV0aWxpdGllc1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFNlcmlhbGl6YXRpb25VdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgQXNzaWduRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFQgUmVtb3ZlRHVwbGljYXRlPFQ+KFQgdmFsdWUsIHJlZiBUIGxhc3RWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChFcXVhbGl0eUNvbXBhcmVyPFQ+LkRlZmF1bHQuRXF1YWxzKHZhbHVlLCBkZWZhdWx0KFQpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHQoVCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlRocmVhZGluZztcclxuI2lmIEJSSURHRVxyXG51c2luZyBDb2RleC5WaWV3LldlYjtcclxuI2Vsc2VcclxudXNpbmcgQ29kZXguRWxhc3RpY1NlYXJjaC5TZWFyY2g7XHJcbiNlbmRpZlxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwYXJ0aWFsIGNsYXNzIEFwcFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0eWxlcy5Jbml0aWFsaXplKCk7XHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggYnVpbGQgcHJvcGVydGllcyBzb21laG93XHJcbiAgICAgICAgICAgIENvZGV4UHJvdmlkZXIuSW5zdGFuY2UgPSBuZXcgV2ViQXBpQ29kZXgoXCJodHRwOi8vbG9jYWxob3N0Ojk0OTEvYXBpL2NvZGV4L1wiKTtcclxuI2Vsc2VcclxuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggYnVpbGQgcHJvcGVydGllcyBzb21laG93XHJcbiAgICAgICAgICAgIENvZGV4UHJvdmlkZXIuSW5zdGFuY2UgPSBuZXcgRWxhc3RpY1NlYXJjaENvZGV4KG5ldyBFbGFzdGljU2VhcmNoLkVsYXN0aWNTZWFyY2hTdG9yZUNvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmVmaXggPSBcImFwcHRlc3RcIlxyXG4gICAgICAgICAgICB9LCBuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU2VydmljZShuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU2VydmljZUNvbmZpZ3VyYXRpb24oXCJodHRwOi8vbG9jYWxob3N0OjkyMDBcIikpKTtcclxuI2VuZGlmXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5PYmplY3RNb2RlbDtcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsIDogRmlsZUl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSVRleHRMaW5lU3BhblJlc3VsdCBTZWFyY2hSZXN1bHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgTGluZU51bWJlciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByZWZpeFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDb250ZW50VGV4dCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN1ZmZpeFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUZXh0U3BhblNlYXJjaFJlc3VsdFZpZXdNb2RlbChJVGV4dExpbmVTcGFuUmVzdWx0IHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlYXJjaFJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHJlZmVycmluZ1NwYW4gPSByZXN1bHQuVGV4dFNwYW47XHJcbiAgICAgICAgICAgIExpbmVOdW1iZXIgPSByZWZlcnJpbmdTcGFuLkxpbmVOdW1iZXI7XHJcbiAgICAgICAgICAgIHN0cmluZyBsaW5lU3BhblRleHQgPSByZWZlcnJpbmdTcGFuLkxpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgaWYgKGxpbmVTcGFuVGV4dCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmVmaXhUZXh0ID0gbGluZVNwYW5UZXh0LlN1YnN0cmluZygwLCByZWZlcnJpbmdTcGFuLkxpbmVTcGFuU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgQ29udGVudFRleHQgPSBsaW5lU3BhblRleHQuU3Vic3RyaW5nKHJlZmVycmluZ1NwYW4uTGluZVNwYW5TdGFydCwgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgU3VmZml4VGV4dCA9IGxpbmVTcGFuVGV4dC5TdWJzdHJpbmcocmVmZXJyaW5nU3Bhbi5MaW5lU3BhblN0YXJ0ICsgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlUmVzdWx0c1ZpZXdNb2RlbCA6IFByb2plY3RJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQYXRoIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSVJlYWRPbmx5TGlzdDxGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbD4gSXRlbXMgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTeW1ib2xSZXN1bHRWaWV3TW9kZWwgOiBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJUmVmZXJlbmNlU3ltYm9sIFN5bWJvbCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNob3J0TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBEaXNwbGF5TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTeW1ib2xLaW5kIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSW1hZ2VNb25pa2VyIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IFNvcnRPcmRlciB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBJZGVudGlmaWVyTGVuZ3RoIHtnZXR7cmV0dXJuIFNob3J0TmFtZS5MZW5ndGg7fX1cclxuXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFJlc3VsdFZpZXdNb2RlbChJRGVmaW5pdGlvblN5bWJvbCBzeW1ib2wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTeW1ib2wgPSBzeW1ib2w7XHJcbiAgICAgICAgICAgIFNob3J0TmFtZSA9IHN5bWJvbC5TaG9ydE5hbWU7XHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gc3ltYm9sLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBQcm9qZWN0SWQgPSBzeW1ib2wuUHJvamVjdElkO1xyXG4gICAgICAgICAgICBTeW1ib2xLaW5kID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTFcIixzeW1ib2wuS2luZCkhPW51bGw/Z2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21UZW1wPHN0cmluZz4oXCJrZXkxXCIpLlRvTG93ZXJJbnZhcmlhbnQoKTooc3RyaW5nKW51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9qZWN0TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIElSZWFkT25seUxpc3Q8UHJvamVjdEl0ZW1SZXN1bHRWaWV3TW9kZWw+IEl0ZW1zIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgOiBMZWZ0UGFuZUNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlzdDxQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPiBQcm9qZWN0R3JvdXBzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByb2plY3RHcm91cHMgPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sPihyZXNwb25zZS5SZXN1bHQuSGl0cywoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCwgZ2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4pKHNyID0+IHNyLkRlZmluaXRpb24pKS5Hcm91cEJ5PHN0cmluZz4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgc3RyaW5nPikoc3IgPT4gc3IuUHJvamVjdElkKSkuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5Qcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgZ2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4sIGdsb2JhbDo6Q29kZXguVmlldy5Qcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPikocHJvamVjdEdyb3VwID0+IG5ldyBQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdE5hbWUgPSBwcm9qZWN0R3JvdXAuS2V5LFxyXG4gICAgICAgICAgICAgICAgSXRlbXMgPSBwcm9qZWN0R3JvdXAuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5TeW1ib2xSZXN1bHRWaWV3TW9kZWw+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguVmlldy5TeW1ib2xSZXN1bHRWaWV3TW9kZWw+KShzeW1ib2wgPT4gbmV3IFN5bWJvbFJlc3VsdFZpZXdNb2RlbChzeW1ib2wpKSkuVG9MaXN0KClcclxuICAgICAgICAgICAgfSkpLlRvTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBIZWFkZXJWaXNpYmlsaXR5IHtnZXR7cmV0dXJuIHN0cmluZy5Jc051bGxPckVtcHR5KEhlYWRlcikgPyBWaXNpYmlsaXR5LkNvbGxhcHNlZCA6IFZpc2liaWxpdHkuVmlzaWJsZTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEhlYWRlciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZXN1bHRzVmlld01vZGVsIFByb2plY3RSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsKHN0cmluZyBzZWFyY2hTdHJpbmcsIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4gcmVzcG9uc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgUHJvamVjdFJlc3VsdHMuUHJvamVjdEdyb3VwcyA9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0PihyZXN1bHQuSGl0cywoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCwgZ2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+KShzciA9PiBzci5UZXh0TGluZSkpLkdyb3VwQnk8c3RyaW5nPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCwgc3RyaW5nPikoc3IgPT4gc3IuUHJvamVjdElkKSkuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5Qcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgZ2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+LCBnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4pKHByb2plY3RHcm91cCA9PiBuZXcgUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByb2plY3ROYW1lID0gcHJvamVjdEdyb3VwLktleSxcclxuICAgICAgICAgICAgICAgIEl0ZW1zID0gcHJvamVjdEdyb3VwLkdyb3VwQnk8c3RyaW5nPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCwgc3RyaW5nPikoc3IgPT4gc3IuUHJvamVjdFJlbGF0aXZlUGF0aCkpLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuRmlsZVJlc3VsdHNWaWV3TW9kZWw+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6U3lzdGVtLkxpbnEuR3JvdXBpbmc8c3RyaW5nLCBnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdD4sIGdsb2JhbDo6Q29kZXguVmlldy5GaWxlUmVzdWx0c1ZpZXdNb2RlbD4pKGZpbGVHcm91cCA9PiBuZXcgRmlsZVJlc3VsdHNWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhdGggPSBmaWxlR3JvdXAuS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIEl0ZW1zID0gZmlsZUdyb3VwLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWw+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0LCBnbG9iYWw6OkNvZGV4LlZpZXcuVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWw+KShzciA9PiBuZXcgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWwoc3IpKSkuVG9MaXN0KClcclxuICAgICAgICAgICAgICAgIH0pKS5Ub0xpc3QoKVxyXG4gICAgICAgICAgICB9KSkuVG9MaXN0KCk7XHJcblxyXG4gICAgICAgICAgICBIZWFkZXIgPSBzdHJpbmcuRm9ybWF0KFwiezB9IHRleHQgc2VhcmNoIGhpdHMgZm9yICd7MX0nXCIscmVzdWx0LkhpdHMuQ291bnQsc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fUHJvamVjdFJlc3VsdHM9bmV3IFByb2plY3RSZXN1bHRzVmlld01vZGVsKCk7fVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwgOiBMZWZ0UGFuZUNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlzdDxDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4gQ2F0ZWdvcmllcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIENhdGVnb3JpemVkU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2F0ZWdvcmllcyA9IGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5DYWxsRm9yKG5ldyBMaXN0PENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsPigpLChfbzEpPT57X28xLkFkZChuZXcgQ2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc2VhcmNoU3RyaW5nLCByZXNwb25zZSkpO3JldHVybiBfbzE7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgTGVmdFBhbmVDb250ZW50XHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIExlZnRQYW5lVmlld01vZGVsIDogTm90aWZ5UHJvcGVydHlDaGFuZ2VkQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBWaXNpYmlsaXR5IFNlYXJjaEluZm9WaXNpYmlsaXR5IHtnZXR7cmV0dXJuICFzdHJpbmcuSXNOdWxsT3JFbXB0eShTZWFyY2hJbmZvKSA/IFZpc2liaWxpdHkuVmlzaWJsZSA6IFZpc2liaWxpdHkuQ29sbGFwc2VkO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU2VhcmNoSW5mbyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBWaXNpYmlsaXR5IENvbnRlbnRWaXNpYmlsaXR5IHtnZXR7cmV0dXJuIENvbnRlbnQgIT0gbnVsbCA/IFZpc2liaWxpdHkuVmlzaWJsZSA6IFZpc2liaWxpdHkuQ29sbGFwc2VkO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBMZWZ0UGFuZUNvbnRlbnQgQ29udGVudCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGVmdFBhbmVWaWV3TW9kZWwgSW5pdGlhbCA9IG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWFyY2hJbmZvID0gXCJFbnRlciBhIHNlYXJjaCBzdHJpbmcuIFN0YXJ0IHdpdGggYCBmb3IgZnVsbCB0ZXh0IHNlYXJjaCByZXN1bHRzIG9ubHkuXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIExlZnRQYW5lVmlld01vZGVsIEZyb21TZWFyY2hSZXNwb25zZShzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLkVycm9yICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSByZXNwb25zZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTJcIixyZXNwb25zZS5SZXN1bHQpIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxJbmRleFF1ZXJ5SGl0czxJU2VhcmNoUmVzdWx0Pj4oXCJrZXkyXCIpLkhpdHM6KExpc3Q8SVNlYXJjaFJlc3VsdD4pbnVsbCkgPT0gbnVsbCB8fCByZXNwb25zZS5SZXN1bHQuSGl0cy5Db3VudCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gc3RyaW5nLkZvcm1hdChcIk5vIHJlc3VsdHMgZm91bmQuXCIpICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5SZXN1bHQ7XHJcbiAgICAgICAgICAgIGJvb2wgaXNEZWZpbml0aW9uc1Jlc3VsdCA9IHJlc3VsdC5IaXRzWzBdLkRlZmluaXRpb24gIT0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbnRlbnQgPSBpc0RlZmluaXRpb25zUmVzdWx0ID9cclxuICAgICAgICAgICAgICAgICAgICAoTGVmdFBhbmVDb250ZW50KW5ldyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbChzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhdGVnb3JpemVkU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSBpc0RlZmluaXRpb25zUmVzdWx0ID9cclxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0LkhpdHMuQ291bnQgPCByZXN1bHQuVG90YWwgP1xyXG5zdHJpbmcuRm9ybWF0KFwiRGlzcGxheWluZyB0b3AgezB9IHJlc3VsdHMgb3V0IG9mIHsxfTpcIixyZXN1bHQuSGl0cy5Db3VudCxyZXN1bHQuVG90YWwpOlxyXG5zdHJpbmcuRm9ybWF0KFwiezB9IHJlc3VsdHMgZm91bmQ6XCIscmVzdWx0LkhpdHMuQ291bnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RyaW5nLkVtcHR5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19TZWFyY2hJbmZvPW51bGw7fVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBSaWdodFBhbmVWaWV3TW9kZWwgOiBOb3RpZnlQcm9wZXJ0eUNoYW5nZWRCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFZpc2liaWxpdHkgRXJyb3JWaXNpYmlsaXR5IHtnZXR7cmV0dXJuICFzdHJpbmcuSXNOdWxsT3JFbXB0eShFcnJvcikgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEVycm9yIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBFZGl0b3JWaXNpYmlsaXR5IHtnZXR7cmV0dXJuIFNvdXJjZUZpbGUgIT0gbnVsbCA/IFZpc2liaWxpdHkuVmlzaWJsZSA6IFZpc2liaWxpdHkuSGlkZGVuO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBJQm91bmRTb3VyY2VGaWxlIFNvdXJjZUZpbGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSaWdodFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSaWdodFBhbmVWaWV3TW9kZWwoSW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZUZpbGU+IHNvdXJjZUZpbGVSZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVycm9yID0gc291cmNlRmlsZVJlc3BvbnNlLkVycm9yO1xyXG4gICAgICAgICAgICBTb3VyY2VGaWxlID0gc291cmNlRmlsZVJlc3BvbnNlLlJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSaWdodFBhbmVWaWV3TW9kZWwoSW5kZXhRdWVyeVJlc3BvbnNlIHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRXJyb3IgPSByZXNwb25zZS5FcnJvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSaWdodFBhbmVWaWV3TW9kZWwoSUJvdW5kU291cmNlRmlsZSBzb3VyY2VGaWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU291cmNlRmlsZSA9IHNvdXJjZUZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCaW5kYWJsZVZhbHVlPFQ+IDogTm90aWZ5UHJvcGVydHlDaGFuZ2VkQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgVCB2YWx1ZTtcclxuXHJcbiAgICAgICAgcHVibGljIFQgVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBPblByb3BlcnR5Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgTm90aWZ5UHJvcGVydHlDaGFuZ2VkQmFzZSA6IElOb3RpZnlQcm9wZXJ0eUNoYW5nZWRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPblByb3BlcnR5Q2hhbmdlZChbQ2FsbGVyTWVtYmVyTmFtZV0gc3RyaW5nIG1lbWJlck5hbWUgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcGVydHlDaGFuZ2VkIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tTGFtYmRhKCgpPT5wcm9wZXJ0eUNoYW5nZWQuSW52b2tlKHRoaXMsIG5ldyBQcm9wZXJ0eUNoYW5nZWRFdmVudEFyZ3MobWVtYmVyTmFtZSkpKTpudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBldmVudCBQcm9wZXJ0eUNoYW5nZWRFdmVudEhhbmRsZXIgcHJvcGVydHlDaGFuZ2VkO1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBQcm9wZXJ0eUNoYW5nZWRFdmVudEhhbmRsZXIgUHJvcGVydHlDaGFuZ2VkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhZGRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDaGFuZ2VkICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW1vdmVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDaGFuZ2VkIC09IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBWaWV3TW9kZWxEYXRhQ29udGV4dCA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIExlZnRQYW5lVmlld01vZGVsIGxlZnRQYW5lO1xyXG5cclxuICAgICAgICBwdWJsaWMgTGVmdFBhbmVWaWV3TW9kZWwgTGVmdFBhbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFBhbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0UGFuZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgT25Qcm9wZXJ0eUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBSaWdodFBhbmVWaWV3TW9kZWwgcmlnaHRQYW5lID0gbmV3IFJpZ2h0UGFuZVZpZXdNb2RlbCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgUmlnaHRQYW5lVmlld01vZGVsIFJpZ2h0UGFuZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByaWdodFBhbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByaWdodFBhbmUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE9uUHJvcGVydHlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGVmdFBhbmUgPSBMZWZ0UGFuZVZpZXdNb2RlbC5Jbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2VzO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIENvbW1hbmRzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSb3V0ZWRDb21tYW5kIEdvVG9EZWZpbml0aW9uID0gQ3JlYXRlQ29tbWFuZCgpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUm91dGVkQ29tbWFuZCBHb1RvU3BhbiA9IENyZWF0ZUNvbW1hbmQoKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgUm91dGVkQ29tbWFuZCBDcmVhdGVDb21tYW5kKFtDYWxsZXJNZW1iZXJOYW1lXSBzdHJpbmcgbmFtZSA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdXRlZENvbW1hbmQobmFtZSwgdHlwZW9mKENvbW1hbmRzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBHb1RvRGVmaW5pdGlvbkNvbW1hbmRCaW5kaW5nIDogVHlwZWRDb21tYW5kQmluZGluZzxJUmVmZXJlbmNlU3ltYm9sPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBHb1RvRGVmaW5pdGlvbkNvbW1hbmRCaW5kaW5nKCkgOiBiYXNlKENvbW1hbmRzLkdvVG9EZWZpbml0aW9uKSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR29Ub1NwYW5Db21tYW5kQmluZGluZyA6IFR5cGVkQ29tbWFuZEJpbmRpbmc8SVRleHRMaW5lU3BhblJlc3VsdD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgR29Ub1NwYW5Db21tYW5kQmluZGluZygpIDogYmFzZShDb21tYW5kcy5Hb1RvU3BhbikgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFR5cGVkQ29tbWFuZEJpbmRpbmc8VD4gOiBDb21tYW5kQmluZGluZ1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBUeXBlZEV4ZWN1dGVkUm91dGVkRXZlbnRIYW5kbGVyPFQ+IENvbW1hbmRFeGVjdXRlZDtcclxuXHJcbiAgICAgICAgcHVibGljIFR5cGVkQ29tbWFuZEJpbmRpbmcoUm91dGVkQ29tbWFuZCBjb21tYW5kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29tbWFuZCA9IGNvbW1hbmQ7XHJcbiAgICAgICAgICAgIGJhc2UuRXhlY3V0ZWQgKz0gVHlwZWRDb21tYW5kQmluZGluZ19FeGVjdXRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBUeXBlZENvbW1hbmRCaW5kaW5nX0V4ZWN1dGVkKG9iamVjdCBzZW5kZXIsIEV4ZWN1dGVkUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0gZS5QYXJhbWV0ZXI7XHJcbiAgICAgICAgICAgIHZhciB0eXBlZFBhcmFtZXRlciA9IChUKXBhcmFtZXRlcjtcclxuICAgICAgICAgICAgQ29tbWFuZEV4ZWN1dGVkIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tTGFtYmRhKCgpPT5Db21tYW5kRXhlY3V0ZWQuSW52b2tlKHR5cGVkUGFyYW1ldGVyKSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGVnYXRlIHZvaWQgVHlwZWRFeGVjdXRlZFJvdXRlZEV2ZW50SGFuZGxlcjxUPihUIHBhcmFtZXRlcik7XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBHcmFudWxhci5QcmVzZW50YXRpb24uV2ViO1xyXG51c2luZyBNb25hY287XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5UaHJlYWRpbmc7XHJcbnVzaW5nIEdyYW51bGFyLkhvc3Q7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBFZGl0b3JIb3N0Q29udHJvbCA6IEZyYW1ld29ya0VsZW1lbnQsIElIdG1sRWxlbWVudEhvc3RcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEhUTUxFbGVtZW50IG1faHRtbEVsZW1lbnQ7XHJcbiAgICAgICAgcHJpdmF0ZSBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciBtX2VkaXRvcjtcclxuICAgICAgICBwcml2YXRlIFJlbmRlclF1ZXVlIHJlbmRlclF1ZXVlID0gbmV3IFJlbmRlclF1ZXVlKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV90ZXh0ID0gXCJIZWxsbyBXb3JsZFwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgdm9pZCBTZXRSZW5kZXJFbGVtZW50KEhUTUxFbGVtZW50IGh0bWxFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbV9odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgICAgICBtX2VkaXRvciA9IGF3YWl0IEVkaXRvci5DcmVhdGUoaHRtbEVsZW1lbnQsIG5ldyBFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtX3RleHQsXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHkgPSB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5WaXN1YWxJc0hpdFRlc3RWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVmlzdWFsQmFja2dyb3VuZCA9IEJydXNoZXMuVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgU2l6ZSBBcnJhbmdlT3ZlcnJpZGUoU2l6ZSBmaW5hbFNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNpemUgPSBWaXN1YWxCb3VuZHMuU2l6ZTtcclxuICAgICAgICAgICAgZmluYWxTaXplID0gYmFzZS5BcnJhbmdlT3ZlcnJpZGUoZmluYWxTaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudFNpemUuSXNDbG9zZShmaW5hbFNpemUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAobV9lZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJRdWV1ZS5JbnZva2VBc3luYygoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbV9lZGl0b3IubGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmluYWxTaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFydGlhbCB2b2lkIE9uU291cmNlRmlsZUNoYW5nZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbV90ZXh0ID0gKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJrZXkxXCIsU291cmNlRmlsZSkhPW51bGw/Z2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21UZW1wPElCb3VuZFNvdXJjZUZpbGU+KFwia2V5MVwiKS5Tb3VyY2VGaWxlLkNvbnRlbnQ6KHN0cmluZyludWxsKSA/PyBzdHJpbmcuRW1wdHk7XHJcbiAgICAgICAgICAgIG1fZWRpdG9yLnNldFZhbHVlKG1fdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1hcmt1cDtcclxuI2lmIEdSQU5VTEFSXHJcbnVzaW5nIElTZXJ2aWNlUHJvdmlkZXIgPSBTeXN0ZW0uV2luZG93cy5NYXJrdXAuSW5pdGlhbGl6ZUNvbnRleHQ7XHJcbiNlbmRpZlxyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBHcmFudWxhckV4dGVuc2lvbnNcclxuICAgIHtcclxuI2lmIEdSQU5VTEFSXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJUHJvcGVydHlQYXRoRWxlbWVudCBBc1RyaWdnZXJQcm9wZXJ0eSh0aGlzIERlcGVuZGVuY3lQcm9wZXJ0eSBkZXBlbmRlbmN5UHJvcGVydHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlcGVuZGVuY3lQcm9wZXJ0eVBhdGhFbGVtZW50KGRlcGVuZGVuY3lQcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG4jZWxzZVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVwZW5kZW5jeVByb3BlcnR5IEFzVHJpZ2dlclByb3BlcnR5KHRoaXMgRGVwZW5kZW5jeVByb3BlcnR5IGRlcGVuZGVuY3lQcm9wZXJ0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5UHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHVibGljIHN0YXRpYyBUeXBlIEdldE1hcmt1cFRhcmdldFR5cGUodGhpcyBJU2VydmljZVByb3ZpZGVyIHByb3ZpZGVyKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIHZhciB0YXJnZXRQcm92aWRlciA9IChJUHJvdmlkZVZhbHVlVGFyZ2V0KXByb3ZpZGVyLkdldFNlcnZpY2UodHlwZW9mKCkpXHJcbiAgICAgICAgLy99XHJcbiNlbmRpZlxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFRyaWdnZXIgV2l0aFNldHRlcnModGhpcyBUcmlnZ2VyIHRyaWdnZXIsIHBhcmFtcyBTZXR0ZXJbXSBzZXR0ZXJzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHNldHRlciBpbiBzZXR0ZXJzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyLlNldHRlcnMuQWRkKHNldHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRGF0YTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRG9jdW1lbnRzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhLkltYWdpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk5hdmlnYXRpb247XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlNoYXBlcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbnRlcmFjdGlvbiBsb2dpYyBmb3IgTGVmdFBhbmUueGFtbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExlZnRQYW5lVmlldyA6IFVzZXJDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExlZnRQYW5lVmlldygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvZGV4LlNkay5TZWFyY2g7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZztcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5EYXRhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Eb2N1bWVudHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLklucHV0O1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWEuSW1hZ2luZztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTmF2aWdhdGlvbjtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuU2hhcGVzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEludGVyYWN0aW9uIGxvZ2ljIGZvciBNYWluV2luZG93LnhhbWxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBNYWluV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIElDb2RleCBDb2RleFNlcnZpY2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgVmlld01vZGVsRGF0YUNvbnRleHQgVmlld01vZGVsID0gbmV3IFZpZXdNb2RlbERhdGFDb250ZXh0KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBNYWluV2luZG93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5EYXRhQ29udGV4dCA9IFZpZXdNb2RlbDtcclxuICAgICAgICAgICAgVmlld01vZGVsLkluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgU2VhcmNoQm94LlRleHQgPSBcIml4ZWRvY1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ1dHRvbl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgR3JpZF9Mb2FkZWQob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIkdyaWRfTG9hZGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIHZvaWQgU2VhcmNoVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgVGV4dENoYW5nZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hTdHJpbmcgPSBTZWFyY2hCb3guVGV4dDtcclxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLlRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hTdHJpbmcuTGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlld01vZGVsLkxlZnRQYW5lID0gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gXCJFbnRlciBhdCBsZWFzdCAzIGNoYXJhY3RlcnMuXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IENvZGV4U2VydmljZS5TZWFyY2hBc3luYyhuZXcgU2VhcmNoQXJndW1lbnRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVmlld01vZGVsLkxlZnRQYW5lID0gTGVmdFBhbmVWaWV3TW9kZWwuRnJvbVNlYXJjaFJlc3BvbnNlKHNlYXJjaFN0cmluZywgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIHZvaWQgR29Ub1NwYW5FeGVjdXRlZChJVGV4dExpbmVTcGFuUmVzdWx0IGxpbmVTcGFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZUZpbGVSZXNwb25zZSA9IGF3YWl0IENvZGV4U2VydmljZS5HZXRTb3VyY2VBc3luYyhuZXcgR2V0U291cmNlQXJndW1lbnRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdElkID0gbGluZVNwYW4uUHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgUHJvamVjdFJlbGF0aXZlUGF0aCA9IGxpbmVTcGFuLlByb2plY3RSZWxhdGl2ZVBhdGgsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVmlld01vZGVsLlJpZ2h0UGFuZSA9IG5ldyBSaWdodFBhbmVWaWV3TW9kZWwoc291cmNlRmlsZVJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIEdvVG9EZWZpbml0aW9uRXhlY3V0ZWQoSVJlZmVyZW5jZVN5bWJvbCBzeW1ib2wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBDb2RleFNlcnZpY2UuRmluZERlZmluaXRpb25Mb2NhdGlvbkFzeW5jKG5ldyBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdElkID0gc3ltYm9sLlByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIFN5bWJvbElkID0gc3ltYm9sLklkLlZhbHVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5FcnJvciAhPSBudWxsIHx8IHJlc3BvbnNlLlJlc3VsdC5IaXRzLkNvdW50ID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSBuZXcgUmlnaHRQYW5lVmlld01vZGVsKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5SZXN1bHQuSGl0cy5Db3VudCA+IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgZGVmaW5pdGlvbnMgaW4gbGVmdCBwYW5lXHJcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuUmlnaHRQYW5lID0gbmV3IFJpZ2h0UGFuZVZpZXdNb2RlbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJUmVmZXJlbmNlU2VhcmNoUmVzdWx0IHJlZmVyZW5jZSA9IHJlc3BvbnNlLlJlc3VsdC5IaXRzWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZUZpbGVSZXNwb25zZSA9IGF3YWl0IENvZGV4U2VydmljZS5HZXRTb3VyY2VBc3luYyhuZXcgR2V0U291cmNlQXJndW1lbnRzKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0SWQgPSByZWZlcmVuY2UuUHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RSZWxhdGl2ZVBhdGggPSByZWZlcmVuY2UuUHJvamVjdFJlbGF0aXZlUGF0aCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSBuZXcgUmlnaHRQYW5lVmlld01vZGVsKHNvdXJjZUZpbGVSZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIFVwZGF0ZVJpZ2h0UGFuZShGdW5jPFRhc2s8UmlnaHRQYW5lVmlld01vZGVsPj4gZ2V0Vmlld01vZGVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0Vmlld01vZGVsID0gYXdhaXQgZ2V0Vmlld01vZGVsKCk7XHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSByaWdodFZpZXdNb2RlbDtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBJQ29kZXggX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvZGV4U2VydmljZT1Db2RleFByb3ZpZGVyLkluc3RhbmNlO31cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU3R5bGVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBCcnVzaCBHZXRNb3VzZU92ZXJCYWNrZ3JvdW5kKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChCcnVzaClvYmouR2V0VmFsdWUoTW91c2VPdmVyQmFja2dyb3VuZFByb3BlcnR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRNb3VzZU92ZXJCYWNrZ3JvdW5kKERlcGVuZGVuY3lPYmplY3Qgb2JqLCBCcnVzaCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iai5TZXRWYWx1ZShNb3VzZU92ZXJCYWNrZ3JvdW5kUHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIGEgRGVwZW5kZW5jeVByb3BlcnR5IGFzIHRoZSBiYWNraW5nIHN0b3JlIGZvciBNb3VzZU92ZXJCYWNrZ3JvdW5kLiAgVGhpcyBlbmFibGVzIGFuaW1hdGlvbiwgc3R5bGluZywgYmluZGluZywgZXRjLi4uXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgTW91c2VPdmVyQmFja2dyb3VuZFByb3BlcnR5ID1cclxuICAgICAgICAgICAgRGVwZW5kZW5jeVByb3BlcnR5LlJlZ2lzdGVyQXR0YWNoZWQoXCJNb3VzZU92ZXJCYWNrZ3JvdW5kXCIsIHR5cGVvZihCcnVzaCksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShCcnVzaGVzLlRyYW5zcGFyZW50KSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIEdldElzTW91c2VPdmVySGVhZGVyKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChib29sKW9iai5HZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRJc01vdXNlT3ZlckhlYWRlcihEZXBlbmRlbmN5T2JqZWN0IG9iaiwgYm9vbCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iai5TZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2luZyBhIERlcGVuZGVuY3lQcm9wZXJ0eSBhcyB0aGUgYmFja2luZyBzdG9yZSBmb3IgSXNNb3VzZU92ZXJIZWFkZXIuICBUaGlzIGVuYWJsZXMgYW5pbWF0aW9uLCBzdHlsaW5nLCBiaW5kaW5nLCBldGMuLi5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlcGVuZGVuY3lQcm9wZXJ0eSBJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5ID1cclxuICAgICAgICAgICAgRGVwZW5kZW5jeVByb3BlcnR5LlJlZ2lzdGVyQXR0YWNoZWQoXCJJc01vdXNlT3ZlckhlYWRlclwiLCB0eXBlb2YoYm9vbCksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShmYWxzZSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBJbml0aWFsaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgTW9uYWNvXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgRWRpdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBUYXNrPG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yPiBDcmVhdGUoSFRNTEVsZW1lbnQgaHRtbEVsZW1lbnQsIEVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgb3B0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IE1vbmFjb0xpYnJhcnkuSW5pdGlhbGl6ZUFzeW5jKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW9uYWNvLmVkaXRvci5jcmVhdGUoaHRtbEVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5bRXh0ZXJuYWxdXHJcbltNb2R1bGUodHJ1ZSwgTG9hZE5hbWUgPSBcInZzL2VkaXRvci9lZGl0b3IubWFpblwiLCBOYW1lID0gXCJtb25hY29fZWRpdG9yX2lnbm9yZWRcIildXHJcbnB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBtb25hY28geyB9XHJcblxyXG5uYW1lc3BhY2UgTW9uYWNvXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXNwb25zaWJsZSBmb3IgbG9hZGluZyB0aGUgbW9uYWNvIGVkaXRvciBqYXZhc2NyaXB0IGxpYnJhcnkgdXNpbmcgdGhlIGxvYWRlci5qc1xyXG4gICAgLy8vIGluY2x1ZGVkIHdpdGggbW9uYWNvXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBNb25hY29MaWJyYXJ5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVGFzayBpbml0aWFsaXplVGFzaztcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUYXNrIEluaXRpYWxpemVBc3luYygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZVRhc2sgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSBpbml0aWFsaXplIG9uY2VcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVUYXNrID0gSW5pdGlhbGl6ZUNvcmVBc3luYygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZVRhc2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBUYXNrIEluaXRpYWxpemVDb3JlQXN5bmMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LldyaXRlKFwicmVxdWlyZS5jb25maWcoeyBwYXRoczogeyAndnMnOiAnbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZGV2L3ZzJyB9IH0pXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBCcmlkZ2UuTW9kdWxlLkxvYWQodHlwZW9mKG1vbmFjbykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRW50aXR5QmFzZSA6IElTZXJpYWxpemFibGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25TZXJpYWxpemluZ0NvcmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25EZXNlcmlhbGl6ZWRDb3JlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIElTZXJpYWxpemFibGVFbnRpdHkuT25TZXJpYWxpemluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPblNlcmlhbGl6aW5nQ29yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBJU2VyaWFsaXphYmxlRW50aXR5Lk9uRGVzZXJpYWxpemVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9uRGVzZXJpYWxpemVkQ29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTZXJpYWxpemFibGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICB2b2lkIE9uRGVzZXJpYWxpemVkKCk7XHJcblxyXG4gICAgICAgIHZvaWQgT25TZXJpYWxpemluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIENvZGV4Lk9iamVjdE1vZGVsO1xyXG51c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3LldlYlxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgV2ViQXBpQ29kZXggOiBJQ29kZXhcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZyBiYXNlVXJsO1xyXG5cclxuICAgICAgICBwdWJsaWMgV2ViQXBpQ29kZXgoc3RyaW5nIGJhc2VVcmwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsLkVuZHNXaXRoKFwiL1wiKSA/IGJhc2VVcmwgOiBiYXNlVXJsICsgJy8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoUmVzdWx0Pj4gRmluZEFsbFJlZmVyZW5jZXNBc3luYyhGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8UmVmZXJlbmNlU2VhcmNoUmVzdWx0PiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmRBbGxSZWZzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4gRmluZERlZmluaXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8RGVmaW5pdGlvblNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hSZXN1bHQ+PiBGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXN5bmMoRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8UmVmZXJlbmNlU2VhcmNoUmVzdWx0PiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWZMb2NhdGlvbiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxJQm91bmRTb3VyY2VGaWxlPj4gR2V0U291cmNlQXN5bmMoR2V0U291cmNlQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeVJlc3BvbnNlPEJvdW5kU291cmNlRmlsZT4sIEluZGV4UXVlcnlSZXNwb25zZTxJQm91bmRTb3VyY2VGaWxlPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkdldFNvdXJjZSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4+IFNlYXJjaEFzeW5jKFNlYXJjaEFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8U2VhcmNoUmVzdWx0PiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLlNlYXJjaCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgVGFzazxUUmVzdWx0PiBQb3N0QXN5bmM8VFNlcmlhbGl6ZWRSZXN1bHQsIFRSZXN1bHQ+KFxyXG4gICAgICAgICAgICBDb2RleFNlcnZpY2VNZXRob2Qgc2VhcmNoTWV0aG9kLFxyXG4gICAgICAgICAgICBvYmplY3QgYXJndW1lbnRzKVxyXG4gICAgICAgICAgICB3aGVyZSBUUmVzdWx0IDogSW5kZXhRdWVyeVJlc3BvbnNlLCBuZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFza0NvbXBsZXRpb25Tb3VyY2U8VFJlc3VsdD4gdGNzID0gbmV3IFRhc2tDb21wbGV0aW9uU291cmNlPFRSZXN1bHQ+KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYmFzZVVybCArIHNlYXJjaE1ldGhvZC5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZSh1cmwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFyZ3VtZW50c0RhdGEgPSBKc29uQ29udmVydC5TZXJpYWxpemVPYmplY3QoYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBuZXcgUmV0eXBlZC5qcXVlcnkuSlF1ZXJ5QWpheFNldHRpbmdzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBhcmd1bWVudHNEYXRhLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgY29udGVudFR5cGUgb2YgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IChkYXRhLCB0ZXh0U3RhdHVzLCBzdWNjZXNzUmVxdWVzdCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0Y3MuU2V0UmVzdWx0KEpzb25Db252ZXJ0LkRlc2VyaWFsaXplT2JqZWN0PFRTZXJpYWxpemVkUmVzdWx0PihzdWNjZXNzUmVxdWVzdC5yZXNwb25zZVRleHQpLkFzPFRSZXN1bHQ+KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IChlcnJvclJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjcy5TZXRSZXN1bHQobmV3IFRSZXN1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3IgPSBzdHJpbmcuRm9ybWF0KFwiRXJyb3I6IHswfVwiLGVycm9yVGhyb3duKSAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUmV0eXBlZC5qcXVlcnkualF1ZXJ5LmFqYXgoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0Y3MuVGFzaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
